export const defaultPreset = [
  {
    name: '一般',
    command: 'hogemoge',
    when: '',
    contains: 'workbench.action.showCommands\nworkbench.action.quickOpen\nworkbench.action.openSettings\nworkbench.action.closeWindow\nworkbench.action.newWindow\nworkbench.action.openGlobalKeybindings\n'
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
    name: 'フォールド',
    command: 'fold -folder',
    when: '',
    contains: ''
  },
  {
    name: '禅モード',
    command: 'zenmode',
    when: '',
    contains: ''
  }
]