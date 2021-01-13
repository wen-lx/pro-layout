const setThemeColor = (color) => {
  localStorage.setItem('themeColor', color)
  getThemeColor()
}

const getThemeColor = () => {
  return localStorage.getItem('themeColor')
}