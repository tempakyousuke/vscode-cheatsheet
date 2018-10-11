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
                    v-switch(v-model='hideForm' label='フォームを隠す' @change="saveHideForm")
                    v-switch(v-model='hideCommand' label='commandを隠す')
                    v-switch(v-model='hideWhen' label='whenを隠す')
                    v-switch(v-model='hideComment' label='コメントを隠す')
              v-form(v-if='!hideForm')
                v-text-field(v-model='command' label="command" hint='半角スペースで複数テキスト検索。「-」を先頭につけることで除外できます。')
                v-text-field(v-model='when' label="when" hint='半角スペースで複数テキスト検索。「-」を先頭につけることで除外できます。')
                v-textarea(box label='commandフィルターを無視' hint='ここに入力したcommandはcommandフィルターで除外されません。改行で複数コマンド登録' v-model='contains')
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
                  v-btn(v-for="(item, index) in preset" color="success" @click="setPreset(index)", :key='`preset${index}`') {{item.name}}
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
    v-layout(row='', justify-center='')
      v-dialog(v-model='jsonDialog', persistent='', max-width='290')
        v-btn(slot='activator', color='primary', dark='') Open Dialog
        v-card
          v-card-title.headline JSONのパースに失敗しました
          v-card-text
            | {{jsonError}}
          v-card-actions
            v-spacer
            v-btn(color='green darken-1', flat='', @click.native='jsonDialog = false') 閉じる

  v-footer(:fixed='fixed', app='')
    span © 2017

</template>

<script>
import appMix from './app.js'
export default {
  mixins:[appMix]
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
