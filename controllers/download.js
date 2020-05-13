
const handleDownload = (req, res) => {
console.log(req.body)
  res.download(req.body.file)
}

module.exports = {
    handleDownload
}


