export const defaultPreset = [
  {
    name: 'コマンドパレット',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.showCommands'
  },
  {
    name: '編集',
    command: 'hogemoge',
    when: '',
    contains: 'editor.action.insertLineAfter\neditor.action.insertLineBefore\neditor.action.moveLinesDownAction\neditor.action.moveLinesUpAction\neditor.action.copyLinesDownAction\neditor.action.copyLinesUpAction\neditor.action.clipboardCopyAction\neditor.action.clipboardCutAction\neditor.action.clipboardPasteAction\nredo\nundo\neditor.action.joinLines\neditor.action.formatDocument\neditor.action.formatSelection'
  },
  {
    name: 'インデント',
    command: 'hogemoge',
    when: '',
    contains: 'editor.action.outdentLines\neditor.action.indentLines\noutdent\ntab'
  },
  {
    name: '移動',
    command: 'hogemoge',
    when: '',
    contains: 'cursorTop\ncursorBottom\ncursorHome\ncursorLineStart\ncursorLineEnd\ncursorEnd\ncursorHome\neditor.action.toggleWordWrap\ncursorWordStartLeft\ncursorWordEndRight\ncursorPageDown\ncursorPageUp\nscrollLineUp\nscrollLineDown\nscrollPageUp\nscrollPageDown\neditor.action.jumpToBracket\nworkbench.action.navigateForward\nworkbench.action.navigateBack\nworkbench.action.navigateToLastEditLocation\ncursorWordEndLeft\ncursorWordLeft\ncursorWordRight\ncursorWordPartLeft\ncursorWordPartRight\ncursorWordPartStartLeft\n'
  },
  {
    name: '選択',
    command: 'hogemoge',
    when: '',
    contains: 'editor.action.selectAll\nexpandLineSelection\ncursorTopSelect\ncursorBottomSelect\ncursorHomeSelect\ncursorPageDownSelect\ncursorPageUpSelect\ncursorWordEndLeftSelect\ncursorWordLeftSelect\ncursorWordRightSelect\ncursorWordPartLeftSelect\ncursorWordPartRightSelect\ncursorWordPartStartLeftSelect\neditor.action.smartSelect.grow\neditor.action.smartSelect.shrink'
  },
  {
    name: '削除',
    command: 'hogemoge',
    when: '',
    contains: 'deleteWordLeft\ndeleteWordRight\neditor.action.deleteLines\ndeleteAllLeft\ndeleteAllRight\ndeleteWordEndLeft\ndeleteWordEndRight\ndeleteWordPartLeft\ndeleteWordPartRight\ndeleteWordStartLeft\ndeleteWordStartRight'
  },
  {
    name: '矩型選択',
    command: 'hogemoge',
    when: '',
    contains: 'cursorColumnSelectDown\ncursorColumnSelectLeft\ncursorColumnSelectPageDown\ncursorColumnSelectPageUp\ncursorColumnSelectRight\ncursorColumnSelectUp'
  },
  {
    name: '複数選択/マルチカーソル',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.toggleMultiCursorModifier\neditor.action.insertCursorAbove\neditor.action.insertCursorAtEndOfEachLineSelected\nremoveSecondaryCursors\neditor.action.insertCursorBelow\neditor.action.addSelectionToNextFindMatch\neditor.action.changeAll\neditor.action.selectHighlights\neditor.action.selectAllMatches'
  },
  {
    name: 'カーソル履歴',
    command: 'hogemoge',
    when: '',
    contains: 'cursorUndo\nworkbench.action.navigateBack\nworkbench.action.navigateForward'
  },
  {
    name: '差分箇所移動',
    command: 'hogemoge',
    when: '',
    contains: 'editor.action.diffReview.next\neditor.action.diffReview.prev\neditor.action.dirtydiff.next\neditor.action.dirtydiff.previous\nworkbench.action.editor.nextChange\nworkbench.action.editor.previousChange'
  },
  {
    name: '警告箇所移動',
    command: 'hogemoge',
    when: '',
    contains: 'editor.action.marker.nextInFiles\neditor.action.marker.prevInFiles'
  },
  {
    name: 'ハイライト移動',
    command: 'hogemoge',
    when: '',
    contains: 'editor.action.wordHighlight.next\neditor.action.wordHighlight.prev'
  },
  {
    name: 'エディタ内検索',
    command: 'hogemoge',
    when: '',
    contains: 'actions.findWithSelection\neditor.action.webvieweditor.showFind\neditor.action.webvieweditor.hideFind\neditor.action.moveSelectionToNextFindMatch\neditor.action.nextMatchFindAction\neditor.action.nextSelectionMatchFindAction\neditor.action.previousMatchFindAction\neditor.action.previousSelectionMatchFindAction\ntoggleFindCaseSensitive\ntoggleFindInSelection\ntoggleFindRegex\ntoggleFindWholeWord\neditor.action.replaceOne\neditor.action.replaceAll'
  },
  {
    name: '全体検索',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.findInFiles\nworkbench.view.search\nsearch.action.cancel\nsearch.action.copyMatch\nsearch.action.copyPath\nsearch.action.focusNextSearchResult\nsearch.action.focusPreviousSearchResult\nsearch.action.focusSearchFromResults\nsearch.action.openResultToSide\nsearch.action.remove\nsearch.action.replace\nsearch.action.replaceAll\nsearch.action.replaceAllInFile\nsearch.action.replaceAllInFolder\nsearch.action.clearHistory\nsearch.action.clearSearchResults\nsearch.action.collapseSearchResults\nsearch.action.copyAll\nsearch.action.focusSearchList\nsearch.action.refreshSearchResults\nsearch.action.toggleSearchViewPosition\nsearch.focus.nextInputBox\nsearch.focus.previousInputBox\ntoggleSearchWholeWord\ntoggleSearchCaseSensitive\ntoggleSearchRegex'
  },
  {
    name: 'ファイルOPEN',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.quickOpen\nworkbench.action.files.openFile\nworkbench.action.files.showOpenedFileInNewWindow\nworkbench.action.reopenClosedEditor'
  },
  {
    name: 'フォルダ・ウィンドウOPEN',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.newWindow\nworkbench.action.files.openFolder\nworkbench.action.addRootFolder\nworkbench.action.files.showOpenedFileInNewWindow\nworkbench.action.openRecent\nworkbench.action.switchWindow\nworkbench.action.openWorkspace'
  },
  {
    name: 'エディタCLOSE',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.closeActiveEditor\nworkbench.action.closeAllEditors\nworkbench.action.closeAllGroups\nworkbench.action.closeEditorsInGroup\nworkbench.action.closeUnmodifiedEditors'
  },
  {
    name: 'フォルダ・ウィンドウCLOSE',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.closeFolder\nworkbench.action.closeWindow'
  },
  {
    name: '設定画面OPEN',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.openSettings\nworkbench.action.openSettingsJson\nworkbench.action.openGlobalKeybindings\nworkbench.action.openDefaultKeybindingsFile\nworkbench.action.openGlobalKeybindingsFile\nworkbench.action.openWorkspaceSettings\nworkbench.action.openWorkspaceConfigFile'
  },
  {
    name: 'エディタ分割',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.splitEditor\nworkbench.action.splitEditorOrthogonal\nworkbench.action.splitEditorDown\nworkbench.action.splitEditorLeft\nworkbench.action.splitEditorRight\nworkbench.action.splitEditorUp\nexplorer.openToSide'
  },
  {
    name: 'エクスプローラー',
    command: 'hogemoge',
    when: '',
    contains: 'explorer.openToSide\nfilesExplorer.copy\ndeleteFile\nmoveFileToTrash\nfilesExplorer.paste\nrenameFile\nexplorer.newFile\nexplorer.newFolder\nworkbench.view.explorer\nworkbench.files.action.focusOpenEditorsView'
  },
  {
    name: 'Source Controll(git)',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.view.scm\nscm.acceptInput'
  },
  {
    name: '拡張機能',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.view.extensions\nworkbench.extensions.action.showRecommendedKeymapExtensions\neditor.action.extensioneditor.showfind'
  },
  {
    name: 'フォールド',
    command: 'fold -folder',
    when: '',
    contains: 'editor.foldLevel1\neditor.foldLevel2\neditor.foldLevel3\neditor.foldLevel4\neditor.foldLevel5\neditor.foldLevel6\neditor.foldLevel7'
  },
  {
    name: 'ターミナル',
    command: 'terminal',
    when: '',
    contains: 'workbench.action.terminal.clearSelection\nworkbench.action.terminal.copySelection\nworkbench.action.terminal.deleteWordLeft\nworkbench.action.terminal.deleteWordRight\nworkbench.action.terminal.findNext\nworkbench.action.terminal.findNextTerminalFocus\nworkbench.action.terminal.findPrevious\nworkbench.action.terminal.findPreviousTerminalFocus\nworkbench.action.terminal.focusFindWidget\nworkbench.action.terminal.focusNextPane\nworkbench.action.terminal.focusPreviousPane\nworkbench.action.terminal.hideFindWidget\nworkbench.action.terminal.new\nworkbench.action.terminal.openNativeConsole\nworkbench.action.terminal.paste\nworkbench.action.terminal.scrollDown\nworkbench.action.terminal.scrollDownPage\nworkbench.action.terminal.scrollToBottom\nworkbench.action.terminal.scrollToTop\nworkbench.action.terminal.scrollUp\nworkbench.action.terminal.scrollUpPage\nworkbench.action.terminal.split\nworkbench.action.terminal.toggleTerminal\nworkbench.action.terminal.allowWorkspaceShell\nworkbench.action.terminal.disallowWorkspaceShell\nworkbench.action.terminal.focus\nworkbench.action.terminal.focusAtIndex1\nworkbench.action.terminal.focusAtIndex2\nworkbench.action.terminal.focusAtIndex3\nworkbench.action.terminal.focusAtIndex4\nworkbench.action.terminal.focusAtIndex5\nworkbench.action.terminal.focusAtIndex6\nworkbench.action.terminal.focusAtIndex7\nworkbench.action.terminal.focusAtIndex8\nworkbench.action.terminal.focusAtIndex9\nworkbench.action.terminal.focusNext\nworkbench.action.terminal.focusPrevious\nworkbench.action.terminal.kill\nworkbench.action.terminal.moveToLineEnd\nworkbench.action.terminal.moveToLineStart\nworkbench.action.terminal.newInActiveWorkspace\nworkbench.action.terminal.rename\nworkbench.action.terminal.resizePaneDown\nworkbench.action.terminal.resizePaneLeft\nworkbench.action.terminal.resizePaneRight\nworkbench.action.terminal.resizePaneUp\nworkbench.action.terminal.runActiveFile\nworkbench.action.terminal.runSelectedText\nworkbench.action.terminal.scrollToNextCommand\nworkbench.action.terminal.scrollToPreviousCommand\nworkbench.action.terminal.selectAll\nworkbench.action.terminal.selectDefaultShell\nworkbench.action.terminal.selectToNextCommand\nworkbench.action.terminal.selectToNextLine\nworkbench.action.terminal.selectToPreviousCommand\nworkbench.action.terminal.selectToPreviousLine\nworkbench.action.terminal.sendSequence\nworkbench.action.terminal.splitInActiveWorkspace\nworkbench.action.terminal.toggleFindCaseSensitive\nworkbench.action.terminal.toggleFindCaseSensitiveTerminalFocus\nworkbench.action.terminal.toggleFindRegex\nworkbench.action.terminal.toggleFindRegexTerminalFocus\nworkbench.action.terminal.toggleFindWholeWord\nworkbench.action.terminal.toggleFindWholeWordTerminalFocus'
  },
  {
    name: '禅モード',
    command: 'zenmode',
    when: '',
    contains: ''
  }
]