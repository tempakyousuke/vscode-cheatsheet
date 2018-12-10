<template lang='pug'>
v-app
  v-content
    v-container(grid-list-md text-xs-center)
      v-layout(row wrap)
        v-flex.mb-3(xs12)
          h1#title VSCode CheatSheet
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
              v-textarea(box label='デフォルトjson' hint='自分のkeybindings.jsonを貼りつけてください' v-model='defaultJson' @change='defaultJsonUpdate')
              v-textarea(box label='カスタムjson' hint='自分でカスタマイズしたkeybind.jsonはこちらに貼り付けてください。' v-model='customJson' @change='customJsonUpdate')
          v-card
            v-card-text
              v-card.mt-3(v-if='!options.hideForm')
                v-card-title キーバインド置換設定
                v-card-text
                  v-layout(row wrap)
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
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.escape' label="escape" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.backspace' label="backspace" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.home' label="home" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.end' label="end" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.pageup' label="pageup" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.pagedown' label="pagedown" @change='updateReplaceOption')
                    v-flex(xs6 sm4 md2)
                      v-text-field(v-model='replaceOption.delete' label="delete" @change='updateReplaceOption')
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
                v-card-title
                  span.headline プリセット
                  v-spacer
                  v-menu(left)
                    v-btn(slot='activator', icon)
                      v-icon more_vert
                    v-list
                      v-list-tile(@click='hideDefaultToggle')
                        v-list-tile-title(v-if='hideDefault' ) デフォルトプリセットを表示
                        v-list-tile-title(v-if='!hideDefault') デフォルトプリセットを隠す
                      v-list-tile(@click='copyConfirm = true')
                        v-list-tile-title デフォルトプリセットコピー
                v-card-text
                  v-btn(v-if='!hideDefault' v-for="(item, index) in preset" color="success" @click="setPreset(index)", :key='`preset${index}`') {{item.name}}
                  v-btn(v-for="(item, index) in customPreset" color='primary' @click="setCustomPreset(index)", :key="index") {{item.name}}
        v-flex(v-if="mode === 'normal'" xs12)
          v-card.text-xs-left
            v-card-title
              v-spacer
              v-menu(left)
                v-btn(slot='activator', icon)
                  v-icon more_vert
                v-list
                  v-list-tile(@click="mode = 'allView'")
                    v-list-tile-title プリセットごとにすべて表示
                  v-list-tile(@click='startGame(keyBind)')
                    v-list-tile-title ゲームスタート
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

        v-flex(v-if="mode === 'allView'" xs12)
          v-card.mt-3.text-xs-left(v-if='!hideDefault' v-for='value, key in preset', :key='`keyBind${key}`')
            v-card-title.headline {{value.name}}
              v-spacer
              v-menu(left)
                v-btn(slot='activator', icon)
                  v-icon more_vert
                v-list
                  v-list-tile(@click="mode = 'normal'")
                    v-list-tile-title 現在のフィルターで表示
                  v-list-tile(@click='startGame(filteredKeyBind(value))')
                    v-list-tile-title ゲームスタート
            v-card-text
              v-data-table(:headers='headers', :items='filteredKeyBind(value)' hide-actions expand)
                template(slot='items', slot-scope="props")
                  td.key-td
                    | {{replaceKey(props.item.key)}}
                  td.command-td(v-if='!options.hideCommand')
                    | {{props.item.command}}
                  td.when-td(v-if='!options.hideWhen')
                    | {{props.item.when}}
                  td.comment-td(v-if='!options.hideComment')
                    | {{commandComments[props.item.command]}}

          v-card.mt-3.text-xs-left(v-for='value, key in customPreset', :key='`keyBind${key}`')
            v-card-title.headline {{value.name}}
              v-spacer
              v-menu(left)
                v-btn(slot='activator', icon)
                  v-icon more_vert
                v-list
                  v-list-tile(@click="mode = 'normal'")
                    v-list-tile-title 現在のフィルターで表示
                  v-list-tile(@click='startGame(filteredKeyBind(value))')
                    v-list-tile-title ゲームスタート
            v-card-text
              v-data-table(:headers='headers', :items='filteredKeyBind(value)' hide-actions expand)
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
      v-dialog(v-model='gameWindow', persistent='', max-width='800')
        v-card
          v-card-title.headline キー入力ゲーム
            template(v-if='!isGameFinish')
              | {{nowQuestionNumber}} / {{sumQuestionNumber}}
          v-card-text.text-xs-center(v-if='!isGameFinish')
            div.question-outer(v-if='!gameOptions.hideKey')
              span.questionKey {{replaceKey(nowQuestion.key)}}
            v-layout.headline(v-if='!gameOptions.hideCommand' row wrap)
              v-flex.text-xs-right(xs4)
                | コマンド名：
              v-flex.text-xs-left(xs5)
                | {{nowQuestion.command}}
            v-layout.headline(v-if='!gameOptions.hideComment' row wrap)
              v-flex.text-xs-right(xs4)
                | コメント：
              v-flex.text-xs-left(xs5)
                | {{commandComments[nowQuestion.command]}}
          v-card-text.text-xs-center(v-if='isGameFinish')
            div.question-outer
              v-btn(icon @click.native='repeatGame' style='height:100px;width:100px;')
                v-icon(size='100px') replay
              br
              span.questionKey(@click='repeatGame') もう一回
          v-card-actions
            v-layout(row justify-start='true' align-content-start)
              v-switch(v-model='gameOptions.hideKey' label='キーを隠す' @change="saveGameOptions")
              v-switch(v-model='gameOptions.hideCommand' label='コマンドを隠す' @change="saveGameOptions")
              v-switch(v-model='gameOptions.hideComment' label='コメントを隠す' @change="saveGameOptions")
            v-spacer
            v-btn(color='green darken-1', flat='', @click.native='gameEnd') 閉じる

      v-dialog(v-model='jsonDialog', persistent='', max-width='290')
        v-card
          v-card-title.headline JSONのパースに失敗しました
          v-card-text
            | {{jsonError}}
          v-card-actions
            v-spacer
            v-btn(color='green darken-1', flat='', @click.native='gameEnd') 閉じる
      v-dialog(v-model='copyConfirm', persistent='', max-width='400')
        v-card
          v-card-title.headline プリセットコピー
          v-card-text
            | デフォルトのプリセットをコピーします
            br
            | 自分で追加した名前と同じ名前のプリセットはコピーされません
          v-card-actions
            v-spacer
            v-btn(color='green darken-1', flat='', @click.native='copyPreset') コピー
            v-btn(color='green darken-1', flat='', @click.native='copyConfirm = false') キャンセル

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
#title
  font-size: 50px
  color: #007ACC

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
<style lang='sass'>
body
  min-height: 1200px

.question-outer
  height: 200px
  padding: 30px

.questionKey
  font-size: 50px
</style>
