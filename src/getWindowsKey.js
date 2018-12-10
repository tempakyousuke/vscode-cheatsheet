export const getWindowsKey = code => {
  if (/Key/.test(code)) {
    return code.replace(/Key/, '').toLowerCase()
  }
  if (/Digit/.test(code)) {
    return code.replace(/Digit/, '')
  }
  if (code === 'ArrowLeft') {
    return 'left'
  }
  if (code === 'ArrowRight') {
    return 'right'
  }
  if (code === 'ArrowUp') {
    return 'up'
  }
  if (code === 'ArrowDown') {
    return 'down'
  }
  if (['Delete', 'Home', 'End', 'Enter', 'PageUp', 'PageDown', 'Tab', 'Backspace', 'Escape'].indexOf(code) !== -1) {
    return code.toLowerCase()
  }
  return code
}