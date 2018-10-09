<template lang='pug'>
v-app
  v-content
    v-container(grid-list-md text-xs-center)
      v-layout(row wrap)
        v-flex(xs12)
          img.mb-5(src='@/assets/logo.png', alt='Vuetify.js')
        v-flex(xs12)
          v-card
            v-card-text
              v-card
                v-card-text
                  v-layout(row justify-start='true' align-content-start)
                    v-switch(v-model='hideForm' label='フォームを隠す')
                    v-switch(v-model='hideCommand' label='commandを隠す')
                    v-switch(v-model='hideWhen' label='whenを隠す')
                    v-switch(v-model='hideComment' label='コメントを隠す')
              v-form(v-if='!hideForm')
                v-text-field(v-model='command' label="command")
                v-text-field(v-model='when' label="when")
              v-card.text-xs-left(v-if='!hideForm')
                v-card-title プリセット追加
                v-card-text
                  v-layout(row )
                    v-flex( xs12 sm6 md3)
                      v-text-field(v-model='customName' label="プリセット名" hint='現在の検索条件をプリセットとして保存します')
                    v-flex( xs12 sm6 md3)
                      v-btn(color="error" @click="addPreset") 追加
              v-card.text-xs-left
                v-card-title プリセット
                v-card-text
                  v-btn(color="success" @click="setPreset('cursor')") 移動
                  v-btn(color="success" @click="setPreset('select')") 選択
                  v-btn(color="success" @click="setPreset('fold')") フォールド
                  v-btn(color="success" @click="setPreset('delete')") 削除
                  v-btn(color="success" @click="setPreset('focus')") フォーカス
                  v-btn(color="success" @click="setPreset('terminal')") ターミナル
                  v-btn(color="success" @click="setPreset('tree')") ツリービュー
                  v-btn(color="success" @click="setPreset('breadcrumbs')") パンくず
                  v-layout(row)
                    v-flex(v-for="(item, index) in customPreset" )
                      v-btn(color='primary' @click="setCustomPreset(index)", :key="index") {{item.name}}
                      v-icon(@click="deletePreset(index)")
                        | delete
              v-card(v-if='!hideForm')
                v-card-title OSを選択
                v-card-text
                  v-radio-group(v-model="os" row @change='osUpdate')
                    v-radio(label="windows" value="0")
                    v-radio(label="linux" value="1")
                    v-radio(label="osx" value="2")
          v-card(v-if='!hideForm')
            v-card-text
              v-textarea(box label='デフォルトjson' hint='defaultのjsonファイルを上書きします。' v-model='defaultJson' @change='defaultJsonUpdate')
              v-textarea(box label='カスタムjson' hint='whenとkeyが一致するものは上書きし、そうでなければ追加します' v-model='customJson' @change='customJsonUpdate')
        v-flex(xs12)
          v-card.text-xs-left
            v-card-text
              v-data-table(:headers='headers', :items='keyBind' hide-actions expand)
                template(slot='items', slot-scope="props")
                  td.key-td
                    | {{replaceKey(props.item.key)}}
                  td.command-td(v-if='!hideCommand')
                    | {{props.item.command}}
                  td.when-td(v-if='!hideWhen')
                    | {{props.item.when}}
                  td.comment-td(v-if='!hideComment')
                    | {{commandComments[props.item.command]}}
  v-footer(:fixed='fixed', app='')
    span © 2017

</template>

<script>
import windowsDefault from './default_keys.json'
import linuxDefault from './linux_keys.json'
import osxDefault from './osx_keys.json'
import { commandComments } from './command_comments.js'
import stripJsonComments from 'strip-json-comments'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      fixed: false,
      title: 'Vuetify.js',
      command: '',
      when: '',
      preset: {
        cursor: {
          command: 'cursor',
          when: ''
        },
        select: {
          command: 'select',
          when: ''
        },
        fold: {
          command: 'fold',
          when: ''
        },
        delete: {
          command: 'delete',
          when: ''
        },
        focus: {
          command: 'focus',
          when: ''
        },
        terminal: {
          command: 'terminal',
          when: ''
        },
        tree: {
          command: '',
          when: 'Explorer'
        },
        breadcrumbs: {
          command: 'breadcrumbs',
          when: ''
        }
      },
      customName: '',
      customPreset: [],
      customJson: '',
      defaultJson: '',
      commandComments: commandComments,
      hideForm: false,
      hideCommand: false,
      hideWhen: false,
      hideComment: false,
      os: '0'
    }
  },
  computed: {
    headers () {
      let headers = [
        { text: 'key', value: 'key', sortable: false }
      ]
      if (!this.hideCommand) {
        headers.push({ text: 'command', value: 'command', sortable: false })
      }
      if (!this.hideWhen) {
        headers.push({ text: 'when', value: 'when', sortable: false })
      }
      if (!this.hideComment) {
        headers.push({ text: 'コメント', value: 'comment', sortable: false })
      }
      return headers
    },
    osDefaultKeyBind () {
      const keyBinds = [windowsDefault, linuxDefault, osxDefault]
      return keyBinds[this.os]
    },
    defaultKeyBind () {
      try {
        return JSON.parse(stripJsonComments(this.defaultJson))
      } catch (e) {
        return this.osDefaultKeyBind
      }
    },
    customKeybind () {
      let data
      try {
        data = JSON.parse(stripJsonComments(this.customJson))
      } catch (e) {
        data = []
      }
      return data
    },
    mergedKeyBind () {
      let keyBind = JSON.parse(JSON.stringify(this.defaultKeyBind))
      for (let value of this.customKeybind) {
        let index = keyBind.findIndex((el) => {
          return (el.key === value.key) && (el.when === value.when)
        })
        if (index !== -1) {
          keyBind[index].command = value.command
        } else {
          keyBind.push(value)
        }
      }
      return keyBind
    },
    keyBind () {
      let keyBind = Object.assign([], this.mergedKeyBind)
      if (this.command) {
        keyBind = keyBind.filter(value => {
          if (value.command) {
            let regexp = new RegExp(this.command, 'i')
            return value.command.match(regexp)
          } else {
            return false
          }
        })
      }

      if (this.when) {
        keyBind = keyBind.filter(value => {
          if (value.when) {
            let regexp = new RegExp(this.when, 'i')
            return value.when.match(regexp)
          } else {
            return false
          }
        })
      }
      return keyBind
    }
  },
  methods: {
    replaceKey (key) {
      key = key
        .replace('escape', 'ESC')
        .replace('escape', 'ESC')
        .replace('oem_1', ':')
        .replace('oem_2', '/')
        .replace('oem_3', '@')
        .replace('oem_4', '[')
        .replace('oem_5', '\'')
        .replace('oem_6', ']')
        .replace('oem_comma', ',')
        .replace('oem_plus', '＋')
        .replace('oem_minus', '－')
        .replace('oem_period', '.')
      return key
    },
    setPreset (key) {
      this.command = this.preset[key].command
      this.when = this.preset[key].when
    },
    defaultJsonUpdate (value) {
      localStorage.setItem('default_json', value)
    },
    customJsonUpdate (value) {
      localStorage.setItem('custom_json', value)
    },
    osUpdate (value) {
      localStorage.setItem('os', value)
    },
    addPreset () {
      if ((this.command || this.when) && this.customName) {
        this.customPreset.push({
          name: this.customName,
          command: this.command,
          when: this.when
        })
        localStorage.setItem('custom_preset', JSON.stringify(this.customPreset))
      }
    },
    setCustomPreset (index) {
      this.when = this.customPreset[index].when
      this.command = this.customPreset[index].command
    },
    deletePreset (index) {
      this.customPreset.splice(index, 1)
      localStorage.setItem('custom_preset', JSON.stringify(this.customPreset))
    }
  },
  created () {
    let json = localStorage.getItem('default_json')
    if (json) {
      this.defaultJson = json
    }
    json = localStorage.getItem('custom_json')
    if (json) {
      this.customJson = json
    }
    let os = localStorage.getItem('os')
    if (os) {
      this.os = os
    }
    let customPreset = localStorage.getItem('custom_preset')
    if (customPreset) {
      this.customPreset = JSON.parse(customPreset)
    }
  }
}
</script>
<style lang='sass' scoped>
td.key-td
  width: 200px
  padding-right: 20px
  overflow-wrap: break-word
td.command-td
  max-width: 200px
  padding-right: 20px
  overflow-wrap: break-word
td.when-td
  max-width: 200px
  padding-right: 20px
  overflow-wrap: break-word
td.comment-td
  max-width: 300px
  overflow-wrap: break-word
</style>
