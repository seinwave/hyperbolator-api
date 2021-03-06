const fs = require('fs');
const path = require('path');
const dl = require('./download');
const mu = require('./mutilators');
const mammoth = require('mammoth');

const nlp = require('compromise');
nlp.extend(require('compromise-numbers'));
nlp.extend(require('compromise-adjectives'));

const HtmlDocx = require('html-docx-js');

const docx = /doc/;
const downloadDoc = 'downloads/download.docx';
const downloadTxt = 'downloads/download.txt';

const handleH5 = (req, res) => {

fs.readFile(req.body.file, (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log(req.body.file)

    if (docx.test(req.body.file)){
        
        mammoth.convertToHtml(data)
            .then(function(result){
                var html = result.value;
                let newContent = 
                    mu.adverbifyAdjective
                    .adverbifyAdjective(mu.comparatorUp
                        .comparatorUp(html, 5),5)
                let newDocx = HtmlDocx.asBlob(newContent)

        fs.writeFile(downloadDoc, newDocx, (err) => {
            if (err) throw err;
            dl.handleDownload(downloadDoc, res)
            })
            })
            .done(); 
        }

    else {

        let newContent = 
                mu.adverbifyAdjective
                    .adverbifyAdjective(mu.comparatorUp
                        .comparatorUp(data, 5),5)

        fs.writeFile(downloadTxt, newContent, (err) => {
            if (err) throw err;
            dl.handleDownload(downloadTxt, res)
            })
    }
    })
};

module.exports = {
    handleH5
}