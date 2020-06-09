const fs = require('fs');
const path = require('path');
const dl = require('./download');
const mu = require('./mutilators');
const mammoth = require('mammoth');

const nlp = require('compromise');
nlp.extend(require('compromise-numbers'));
nlp.extend(require('compromise-adjectives'));

const docx = /doc/
const downloadDoc = 'downloads/download.docx'
const downloadTxt = 'downloads/download.txt'

const handleH4 = (req, res) => {

fs.readFile(req.body.file, (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log(req.body.file)

    if (docx.test(req.body.file)){
        console.log('MAMMOTH BITCH!')
        mammoth.convertToHtml(data)
            .then(function(result){
                var html = result.value;
                let newShit = 
                mu.adverbifyAdjective
                    .adverbifyAdjective(mu.comparatorUp
                        .comparatorUp(html, 4),4)

        fs.writeFile(downloadDoc, newShit, (err) => {
            if (err) throw err;
            dl.handleDownload(downloadDoc, res)
            })
            })
            .done(); 
        }

    else {

        console.log('MAMMOTH FREE ZONE BITCH!')
        let newShit = 
                mu.adverbifyAdjective
                    .adverbifyAdjective(mu.comparatorUp
                        .comparatorUp(data, 4),4)

        fs.writeFile(downloadTxt, newShit, (err) => {
            if (err) throw err;
            dl.handleDownload(downloadTxt, res)
            })
    }
    })
};

module.exports = {
    handleH4
}