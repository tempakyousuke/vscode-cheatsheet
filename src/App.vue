<template lang='pug'>
v-app
  v-content
    v-container(fluid='')
      v-slide-y-transition(mode='out-in')
        v-layout(column='', align-center='')
          img.mb-5(src='@/assets/logo.png', alt='Vuetify.js')
          v-data-table(:headers='headers', :items='key_bind' hide-actions expand)
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
import keyBind from './default_keys.json'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      headers: [
        { text: 'key', value: 'key' },
        { text: 'command', value: 'command' },
        { text: 'when', value: 'when' },
        { text: 'コメント', value: 'comment' },
      ],
      key_bind: keyBind,
      fixed: false,
      title: 'Vuetify.js'
    }
  },
  created () {
    console.log(this.key_bind)
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
