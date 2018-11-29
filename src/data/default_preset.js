export const defaultPreset = [
  {
    name: '一般',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.showCommands\nworkbench.action.quickOpen\nworkbench.action.openSettings\nworkbench.action.closeWindow\nworkbench.action.newWindow\nworkbench.action.openGlobalKeybindings\n'
  },
  {
    name: '編集',
    command: 'hogemoge',
    when: '',
    contains: 'editor.action.insertLineAfter\neditor.action.insertLineBefore\neditor.action.moveLinesDownAction\neditor.action.moveLinesUpAction\neditor.action.copyLinesDownAction\neditor.action.copyLinesUpAction\neditor.action.clipboardCopyAction\neditor.action.clipboardCutAction\neditor.action.clipboardPasteAction'
  },
  {
    name: '移動・選択',
    command: 'hogemoge',
    when: '',
    contains: 'cursorTop\ncursorTopSelect\ncursorBottom\ncursorBottomSelect\ncursorHome\ncursorHomeSelect\ncursorLineStart\ncursorLineEnd\ncursorEnd\ncursorHome\neditor.action.toggleWordWrap\ncursorWordStartLeft\ncursorWordEndRight\nscrollLineUp\nscrollLineDown\nscrollPageUp\nscrollPageDown\neditor.action.jumpToBracket\nworkbench.action.navigateForward\nworkbench.action.navigateBack\nworkbench.action.navigateToLastEditLocation\ncursorWordEndLeft\ncursorWordEndLeftSelect\ncursorWordLeft\ncursorWordLeftSelect\ncursorWordRight\ncursorWordRightSelect\ncursorWordPartLeft\ncursorWordPartLeftSelect\ncursorWordPartRight\ncursorWordPartRightSelect\ncursorWordPartStartLeft\ncursorWordPartStartLeftSelect\neditor.action.smartSelect.grow\neditor.action.smartSelect.shrink'
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
    contains: 'workbench.action.toggleMultiCursorModifier\neditor.action.insertCursorAbove\nremoveSecondaryCursors\neditor.action.insertCursorBelow\neditor.action.addSelectionToNextFindMatch\neditor.action.changeAll\neditor.action.selectHighlights'
  },
  {
    name: 'エディタ内検索',
    command: 'hogemoge',
    when: '',
    contains: 'editor.action.webvieweditor.showFind\neditor.action.webvieweditor.hideFind'
  },
  {
    name: 'フォルダー・ファイルOPEN',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.quickOpen\nworkbench.action.files.openFile\nworkbench.action.files.openFolder\nworkbench.action.addRootFolder\n'
  },
  {
    name: 'ウィンドウ・エディタ開閉',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.closeActiveEditor\nworkbench.action.closeAllEditors\nworkbench.action.closeAllGroups\nworkbench.action.closeEditorsInGroup\nworkbench.action.closeFolder\n\nworkbench.action.closeUnmodifiedEditors\nworkbench.action.closeWindow\nworkbench.action.files.showOpenedFileInNewWindow\nworkbench.action.newWindow'
  },
  {
    name: 'エディタ分割',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.splitEditor\nworkbench.action.splitEditorOrthogonal\nworkbench.action.splitEditorDown\nworkbench.action.splitEditorLeft\nworkbench.action.splitEditorRight\nworkbench.action.splitEditorUp\nexplorer.openToSide'
  },
  {
    name: 'フォールド',
    command: 'fold -folder',
    when: '',
    contains: ''
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