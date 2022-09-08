const CheckSession = async (req, res) => {
  console.log("CHECK SESSION")
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  CheckSession
}