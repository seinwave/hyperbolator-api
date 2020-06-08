const fs = require('fs');
const path = require('path');
const dl = require('./download');
const mu = require('./mutilators');
const mammoth = require('mammoth');

const nlp = require('compromise');
nlp.extend(require('compromise-numbers'));
nlp.extend(require('compromise-adjectives'));


const handleH2 = (req, res) => {

fs.readFile(req.body.file, (err, data) => {
    if (err) {
        console.log(err)
    }

    mammoth.convertToHtml(data)
        .then(function(result){
            var html = result.value;
            let newShit = mu.adverbifyAdjective
    .adverbifyAdjective(mu.comparatorUp.comparatorUp(html, 2),2);

    fs.writeFile(req.body.file, newShit, (err) => {
        if (err) throw err;
        dl.handleDownload(req.body.file, res)
        })
        })
        .done(); 
    
    }) 
};

module.exports = {
    handleH2
}