import windowsDefault from './default_keys.json'
import linuxDefault from './linux_keys.json'
import osxDefault from './osx_keys.json'
import { commandComments } from './command_comments.js'
import stripJsonComments from 'strip-json-comments'

export default {
  name: 'App',
  components: {
  },
  data() {
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
    headers() {
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
    osDefaultKeyBind() {
      const keyBinds = [windowsDefault, linuxDefault, osxDefault]
      return keyBinds[this.os]
    },
    defaultKeyBind() {
      try {
        return JSON.parse(stripJsonComments(this.defaultJson))
      } catch (e) {
        return this.osDefaultKeyBind
      }
    },
    customKeybind() {
      let data
      try {
        data = JSON.parse(stripJsonComments(this.customJson))
      } catch (e) {
        data = []
      }
      return data
    },
    mergedKeyBind() {
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
    keyBind() {
      let keyBind = Object.assign([], this.mergedKeyBind)
      if (this.command) {
        let commands = this.command.split(' ')
        for (let value of commands) {
          keyBind = this.keyFilter(keyBind, 'command', value)
        }
      }

      if (this.when) {
        let whens = this.when.split(' ')
        for (let value of whens) {
          keyBind = this.keyFilter(keyBind, 'when', value)
        }      
      }
      return keyBind
    }
  },
  methods: {
    replaceKey(key) {
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
    setPreset(key) {
      this.command = this.preset[key].command
      this.when = this.preset[key].when
    },
    defaultJsonUpdate(value) {
      localStorage.setItem('default_json', value)
    },
    customJsonUpdate(value) {
      localStorage.setItem('custom_json', value)
    },
    osUpdate(value) {
      localStorage.setItem('os', value)
    },
    addPreset() {
      if ((this.command || this.when) && this.customName) {
        this.customPreset.push({
          name: this.customName,
          command: this.command,
          when: this.when
        })
        localStorage.setItem('custom_preset', JSON.stringify(this.customPreset))
      }
    },
    setCustomPreset(index) {
      this.when = this.customPreset[index].when
      this.command = this.customPreset[index].command
    },
    deletePreset(index) {
      this.customPreset.splice(index, 1)
      localStorage.setItem('custom_preset', JSON.stringify(this.customPreset))
    },
    keyFilter(keyBind, key, str) {
      keyBind = keyBind.filter(value => {
        if (!value[key]) {
          return false
        }
        if (str[0] === '-') {
          let regexp = new RegExp(str.slice(1), 'i')
          return !value[key].match(regexp)
        }      
        let regexp = new RegExp(str, 'i')
        return value[key].match(regexp)
      })
      return keyBind
    }
  },
  created() {
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