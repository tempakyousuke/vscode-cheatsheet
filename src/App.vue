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
                    v-switch(v-model='options.hideForm' label='フォームを隠す' @change="saveOptions")
                    v-switch(v-model='options.hideCommand' label='commandを隠す' @change="saveOptions")
                    v-switch(v-model='options.hideWhen' label='whenを隠す' @change="saveOptions")
                    v-switch(v-model='options.hideComment' label='コメントを隠す' @change="saveOptions")
          v-card(v-if='!options.hideForm')
            v-card-text
              v-textarea(box label='デフォルトjson' hint='defaultのjsonファイルを上書きします。拡張機能等でキーバインドが変わっている人は自分のkeybindings.jsonを貼りつけてください' v-model='defaultJson' @change='defaultJsonUpdate')
              v-textarea(box label='カスタムjson' hint='自分でカスタマイズしたkeybind.jsonはこちらに貼り付けてください。' v-model='customJson' @change='customJsonUpdate')
          v-card
            v-card-text
              v-card.mt-3(v-if='!options.hideForm')
                v-card-title キーバインド置換設定
                v-card-text
                  v-layout(row wrap)
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.escape' label="escape" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.oem_1' label="oem_1" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.oem_2' label="oem_2" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.oem_3' label="oem_3" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.oem_4' label="oem_4" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.oem_5' label="oem_5" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.oem_6' label="oem_6" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.oem_comma' label="oem_comma" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.oem_plus' label="oem_plus" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.oem_minus' label="oem_minus" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.oem_period' label="oem_period" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model="replaceOption['[IntlYen]']" label="[IntlYen]" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model="replaceOption['[Quote]']" label="[Quote]" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model="replaceOption['[Minus]']" label="[Minus]" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model="replaceOption['[IntlRo]']" label="[IntlRo]" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model="replaceOption['[Equal]']" label="[Equal]" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model="replaceOption['[BracketLeft]']" label="[BracketLeft]" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model="replaceOption['[Semicolon]']" label="[Semicolon]" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model="replaceOption.alt" label="alt" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model="replaceOption.cmd" label="cmd" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model="replaceOption.shift" label="shift" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model="replaceOption.ctrl" label="ctrl" @change='updateReplaceOption')
              v-form(v-if='!options.hideForm')
                v-text-field(v-model='command' label="command" hint='半角スペースで複数テキスト検索。「-」を先頭につけることで除外できます。')
                v-text-field(v-model='when' label="when" hint='半角スペースで複数テキスト検索。「-」を先頭につけることで除外できます。')
                v-textarea(box label='常に表示' hint='ここに記述したcommandはフィルターで除外されません。改行で複数コマンド登録' v-model='contains')
              v-card.text-xs-left(v-if='!options.hideForm')
                v-card-title プリセット追加
                v-card-text
                  v-layout(row )
                    v-flex( xs12 sm6 md3)
                      v-text-field(v-model='customName' label="プリセット名" hint='現在の検索条件をプリセットとして保存します')
                    v-flex( xs12 sm6 md3)
                      v-layout(row)
                        v-btn(v-if="presetIndex === -1" color="primary" @click="addPreset") 追加
                        v-btn(v-if="presetIndex !== -1" color="primary" @click="updatePreset") 更新
                        v-btn(v-if="presetIndex !== -1" color="error" @click="deletePreset")
                          v-icon
                            | delete
                          | 削除
              v-card.text-xs-left
                v-card-title プリセット
                v-card-text
                  v-btn(v-for="(item, index) in preset" color="success" @click="setPreset(index)", :key='`preset${index}`') {{item.name}}
                  v-btn(v-for="(item, index) in customPreset" color='primary' @click="setCustomPreset(index)", :key="index") {{item.name}}
        v-flex(xs12)
          v-card.text-xs-left
            v-card-text
              v-data-table(:headers='headers', :items='keyBind' hide-actions expand)
                template(slot='items', slot-scope="props")
                  td.key-td
                    | {{replaceKey(props.item.key)}}
                  td.command-td(v-if='!options.hideCommand')
                    | {{props.item.command}}
                  td.when-td(v-if='!options.hideWhen')
                    | {{props.item.when}}
                  td.comment-td(v-if='!options.hideComment')
                    | {{commandComments[props.item.command]}}
    v-layout(row='', justify-center='')
      v-dialog(v-model='jsonDialog', persistent='', max-width='290')
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
  mixins: [appMix]
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
