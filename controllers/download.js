const fs = require('fs')
const path = require('path')


const handleDownload = (fileToDownload, res) => {
  
  // sends file to the user
  res.download(fileToDownload) 

  // deletes it from the uploads directory
  fs.readdir('uploads', (err, files) => { 
    for (const fileToDelete of files) {
      fs.unlink(path.join('uploads', fileToDelete), err => {
        if (err) throw err; 
      })
    }
  })
}

module.exports = {
    handleDownload
}


