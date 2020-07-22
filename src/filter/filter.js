const filterNum = (value) => {
  if (value) {
    value = Number(value)
    return '￥ ' + value.toFixed(2)
  }
}
export { filterNum }
