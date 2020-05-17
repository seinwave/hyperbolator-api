const fs = require('fs')
const path = require('path')
const dl = require('./download')

const nlp = require('compromise');
nlp.extend(require('compromise-numbers'))
nlp.extend(require('compromise-adjectives'))

const handleH0 = (req, res) => {

fs.readFile(req.body.file, (err, data) => {
    if (err) {
        console.log(err)
    }
    const content = nlp(data)
    content.replace(content.nouns(), "0")
    let newShit = content.text();

    fs.writeFile(req.body.file, newShit, (err) => {
        if (err) throw err;
        dl.handleDownload(req.body.file, res)
        })
    }) 
};

module.exports = {
    handleH0
}