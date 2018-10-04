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
              v-form
                v-text-field(v-model='command' label="command")
                v-text-field(v-model='when' label="when")
        v-flex(xs12)
          v-card.text-xs-left
            v-card-text
              v-data-table(:headers='headers', :items='keyBind' hide-actions expand)
                template(slot='items', slot-scope="props")
                  td.key-td
                    | {{props.item.key}}
                  td.command-td
                    | {{props.item.command}}
                  td.when-td
                    | {{props.item.when}}
                  td.comment-td
                    | {{props.item.comment}}
  v-footer(:fixed='fixed', app='')
    span © 2017

</template>

<script>
import defaultKeyBind from './default_keys.json'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      headers: [
        { text: 'key', value: 'key', sortable: false },
        { text: 'command', value: 'command', sortable: false },
        { text: 'when', value: 'when', sortable: false },
        { text: 'コメント', value: 'comment', sortable: false }
      ],
      fixed: false,
      title: 'Vuetify.js',
      command: '',
      when: ''
    }
  },
  computed: {
    keyBind () {
      let keyBind = Object.assign([], defaultKeyBind)

      if (this.command) {
        keyBind = keyBind.filter(value => {
          if (value.command) {
            return value.command.indexOf(this.command) !== -1
          } else {
            return false
          }
        })
      }

      if (this.when) {
        keyBind = keyBind.filter(value => {
          if (value.when) {
            return value.when.indexOf(this.when) !== -1
          } else {
            return false
          }
        })
      }
      return keyBind
    }
  },
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
