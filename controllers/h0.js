const fs = require('fs')
const path = require('path')
const dl = require('./download')
const mu = require('./mutilators')

const nlp = require('compromise');
nlp.extend(require('compromise-numbers'))
nlp.extend(require('compromise-adjectives'))

const handleH0 = (req, res) => {

fs.readFile(req.body.file, (err, data) => {
    if (err) {
        console.log(err)
    }
    let newShit = mu.comparatorUp(data, 2);

    fs.writeFile(req.body.file, newShit, (err) => {
        if (err) throw err;
        dl.handleDownload(req.body.file, res)
        })
    }) 
};

module.exports = {
    handleH0
}