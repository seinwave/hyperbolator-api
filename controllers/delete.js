const fs = require('fs')
const path = require('path')


const handleDelete = (res) => {

  // deletes file from uploads directory
  fs.readdir('uploads', (err, files) => {
    if (files){ 
    for (const fileToDelete of files) {
      fs.unlink(path.join('uploads', fileToDelete), err => {
        if (err) throw err; 
      })
    }
  }
  })
}

module.exports = {
    handleDelete
}