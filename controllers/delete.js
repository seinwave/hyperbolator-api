const fs = require('fs')
const path = require('path')

const empty = ''

const handleDelete = (res) => {

  // deletes file from uploads directory
  fs.readdir('uploads', (err, files) => {
    if (err) {
      throw err
    }

    if (files){ 
      for (const fileToDelete of files) {
        fs.unlink(path.join('uploads', fileToDelete), err => {
          if (err) throw err; 
        })
      }
    }
  }),

  // clears download files 
  fs.readdir('downloads', (err, files) => {
    if (err) {
      throw err
    }

    if (files){
      for (const fileToClear of files){
        fs.writeFile(`downloads/${fileToClear}`, empty, (err) => {
          if (err) {
            throw err
          }
        })
      }
    }
  })
}

module.exports = {
    handleDelete
}