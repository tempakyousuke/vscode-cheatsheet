export const getOsxKey = code => {
  if (/Key/.test(code)) {
    return code.replace(/Key/, '').toLowerCase()
  }
  if (/Digit/.test(code)) {
    return code.replace(/Digit/, '')
  }
  if (code === 'BracketRight') {
    return ']'
  }
  if (code === 'Backslash') {
    return '['
  }
  if (code === 'Comma') {
    return ','
  }
  if (code === 'Period') {
    return '.'
  }
  if (code === 'Slash') {
    return '/'
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
  if (['Delete', 'Home', 'End', 'Enter', 'PageUp', 'PageDown', 'Tab', 'Backspace'].indexOf(code) !== -1) {
    return code.toLowerCase()
  }
  return `[${code}]`
}