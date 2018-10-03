<template lang='pug'>
v-app
  v-content
    v-container(fluid='')
      v-slide-y-transition(mode='out-in')
        v-layout(column='', align-center='')
          img.mb-5(src='@/assets/logo.png', alt='Vuetify.js')
          blockquote
            | “First, solve the problem. Then, write the code.”
            footer
              small
                em —John Johnson
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
      key_bind: keyBind,
      fixed: false,
      title: 'Vuetify.js'
    }
  },
  created () {
    console.log(this.key_data[0])
  }
}
</script>
