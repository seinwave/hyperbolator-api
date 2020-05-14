const fs = require('fs')
const path = require('path')


const handleDownload = (req, res) => {
  console.log(req.body)
  res.download(req.body.file)

  fs.readdir('uploads', (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join('uploads', file), err => {
        if (err) throw err; 
      })
    }
  })
}

module.exports = {
    handleDownload
}


