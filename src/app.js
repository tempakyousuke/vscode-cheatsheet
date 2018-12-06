import windowsDefault from '@/data/windowsDefaultKeys.json'
import osxDefault from '@/data/osxDefaultKeys.json'
import { commandComments } from './command_comments.js'
import stripJsonComments from 'strip-json-comments'
import { defaultPreset } from '@/data/default_preset.js'
import replaceString from 'replace-string'

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
      contains: '',
      preset: defaultPreset,
      customName: '',
      customPreset: [],
      customJson: '',
      defaultJson: '',
      commandComments: commandComments,
      options: {
        hideForm: true,
        hideCommand: false,
        hideWhen: false,
        hideComment: false,
      },
      hideDefault: false,
      jsonDialog: false,
      jsonError: '',
      replaceOption: {
        'oem_1': ':',
        'oem_2': '/',
        'oem_3': '@',
        'oem_4': '[',
        'oem_5': '\\',
        'oem_6': ']',
        'oem_comma': ',',
        'oem_plus': '＋',
        'oem_minus': '－',
        'oem_period': '.',
        '[IntlYen]': '¥',
        '[Quote]': ':',
        '[Minus]': '-',
        '[IntlRo]': '_',
        '[Equal]': '^',
        '[BracketLeft]': '@',
        '[Semicolon]': ';',
        'alt': 'alt',
        'cmd': 'cmd',
        'shift': 'shift',
        'ctrl': 'ctrl',
        'escape': 'escape',
        'backspace': 'backspace',
        'home': 'home',
        'end': 'end',
        'pageup': 'pageup',
        'pagedown': 'pagedown',
        'delete': 'delete',
      },
      mode: 'normal',
      copyConfirm: false,
      gameWindow: false,
      gameKeyBind: [],
      gameIndex: 0,
    }
  },
  computed: {
    headers() {
      let headers = [
        { text: 'key', value: 'key', sortable: false }
      ]
      if (!this.options.hideCommand) {
        headers.push({ text: 'command', value: 'command', sortable: false })
      }
      if (!this.options.hideWhen) {
        headers.push({ text: 'when', value: 'when', sortable: false })
      }
      if (!this.options.hideComment) {
        headers.push({ text: 'コメント', value: 'comment', sortable: false })
      }
      return headers
    },
    defaultKeyBind() {
      try {
        return JSON.parse(this.defaultJson)
      } catch (e) {
        if (navigator.userAgent.indexOf('Mac') !== -1) {
          return osxDefault
        } else {
          return windowsDefault
        }
      }
    },
    customKeybind() {
      let data
      try {
        data = JSON.parse(this.customJson)
      } catch (e) {
        data = []
      }
      return data
    },
    mergedKeyBind() {
      let keyBind = JSON.parse(JSON.stringify(this.defaultKeyBind))
      for (let value of this.customKeybind) {
        if (value.command[0] === '-') {
          // delete keybind
          let delCommand = value.command.slice(1)
          let index = keyBind.findIndex((el) => {
            return (el.key === value.key) && (el.when === value.when) && el.command === delCommand
          })
          if (index !== -1) {
            keyBind.splice(index, 1)
          }
        } else {
          let index = keyBind.findIndex((el) => {
            return (el.key === value.key) && (el.when === value.when)
          })
          if (index !== -1) {
            keyBind[index].command = value.command
          } else {
            keyBind.push(value)
          }
        }
      }
      return keyBind
    },
    keyBind() {
      return this.filteredKeyBind({
        command: this.command,
        when: this.when,
        contains: this.contains
      })
    },
    presetIndex() {
      return this.customPreset.findIndex(value => value.name === this.customName)
    },
    sumQuestionNumber() {
      return this.gameKeyBind.length
    },
    nowQuestionNumber() {
      return this.gameIndex + 1
    },
  },
  methods: {
    replaceKey(key) {
      Object.entries(this.replaceOption).forEach(([before, after]) => {
        if (after) {
          key = replaceString(key, before, after)
        }
      })
      return key
    },
    defaultJsonUpdate(value) {
      this.defaultJson = stripJsonComments(value)
      try {
        JSON.parse(this.defaultJson)
      } catch (e) {
        this.jsonError = e
        this.jsonDialog = true
      }
      localStorage.setItem('default_json', this.defaultJson)
    },
    customJsonUpdate(value) {
      this.customJson = stripJsonComments(value)
      try {
        JSON.parse(this.customJson)
      } catch (e) {
        this.jsonError = e.message
        this.jsonDialog = true
      }
      localStorage.setItem('custom_json', value)
    },
    osUpdate(value) {
      localStorage.setItem('os', value)
    },
    saveOptions() {
      localStorage.setItem('options', JSON.stringify(this.options))
    },
    addPreset() {
      if ((this.command || this.when || this.contains) && this.customName) {
        this.customPreset.push({
          name: this.customName,
          command: this.command,
          when: this.when,
          contains: this.contains
        })
        localStorage.setItem('custom_preset', JSON.stringify(this.customPreset))
      }
    },
    updatePreset() {
      this.customPreset[this.presetIndex] = {
        name: this.customName,
        command: this.command,
        when: this.when,
        contains: this.contains
      }
      localStorage.setItem('custom_preset', JSON.stringify(this.customPreset))
    },
    updateReplaceOption() {
      localStorage.setItem('replaceOption', JSON.stringify(this.replaceOption))
    },
    setPreset(index) {
      this.command = this.preset[index].command
      this.when = this.preset[index].when
      this.contains = this.preset[index].contains
      this.customName = this.preset[index].name
    },
    setCustomPreset(index) {
      this.when = this.customPreset[index].when
      this.command = this.customPreset[index].command
      this.contains = this.customPreset[index].contains
      this.customName = this.customPreset[index].name
    },
    deletePreset() {
      if (this.presetIndex === -1) {
        return
      }
      this.customPreset.splice(this.presetIndex, 1)
      localStorage.setItem('custom_preset', JSON.stringify(this.customPreset))
    },
    filteredKeyBind({ command, when, contains }) {
      let keyBind = Object.assign([], this.mergedKeyBind)
      if (command) {
        let commands = command.split(' ')
        for (let value of commands) {
          keyBind = this.keyFilter(keyBind, 'command', value, contains)
        }
      }

      if (when) {
        let whens = when.split(' ')
        for (let value of whens) {
          keyBind = this.keyFilter(keyBind, 'when', value, contains)
        }
      }
      let containsArr = contains.split('\n')
      for (let value of containsArr) {
        let index = keyBind.findIndex(el => el.command === value)
        if (index === -1) {
          keyBind.push({
            key: '',
            command: value,
            when: ''
          })
        }
      }
      return keyBind
    },
    keyFilter(keyBind, key, str, contains) {
      let containsArr = contains.split('\n')
      keyBind = keyBind.filter(value => {
        if (containsArr.indexOf(value.command) !== -1) {
          return true
        }
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
    },
    copyPreset() {
      let preset = this.preset.filter(value => {
        return !this.isInCustomPreset(value.name)
      })
      this.customPreset = [...this.customPreset, ...preset]
      this.copyConfirm = false
    },
    isInCustomPreset(name) {
      return this.customPreset.some(value => {
        return value.name === name
      })
    },
    hideDefaultToggle() {
      this.hideDefault = !this.hideDefault
      localStorage.setItem('hideDefault', JSON.stringify(this.hideDefault))
    },
    startGame(keyBind) {
      this.gameWindow = true
      this.gameKeyBind = keyBind.filter((value) => {
        return value.key
      })
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
    let customPreset = localStorage.getItem('custom_preset')
    if (customPreset) {
      this.customPreset = JSON.parse(customPreset)
    }
    let options = localStorage.getItem('options')
    if (options) {
      this.options = JSON.parse(options)
    }

    let replaceOption = localStorage.getItem('replaceOption')
    if (replaceOption) {
      this.replaceOption = JSON.parse(replaceOption)
    } else {
      // mac用にデフォルト値を変更
      if (navigator.userAgent.indexOf('Mac') !== -1) {
        this.replaceOption.alt = '⌥'
        this.replaceOption.cmd = '⌘'
        this.replaceOption.shift = '⇧'
        this.replaceOption.ctrl = '^'
      }
    }

    let hideDefault = localStorage.getItem('hideDefault')
    if (hideDefault) {
      this.hideDefault = JSON.parse(hideDefault)
    }
  }
}