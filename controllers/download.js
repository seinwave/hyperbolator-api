const fs = require('fs')
const path = require('path')


const handleDownload = (fileToDownload, res) => {
  
  // sends file to the user
  res.status(200).download(fileToDownload) 

}

module.exports = {
    handleDownload
}


