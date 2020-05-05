const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const formidable = require('formidable');


app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accet");
    next();
})

app.get('/', (req,res) => {
    res.send("Hey fuckface.");
});

app.post('/upload', (req,res) => {
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
        console.error('Error', err)
        throw err
    }   
    console.log('Fields', fields);
    console.log('Files', files);
    for (const file of Object.entries(files)) {
        console.log(file);
    }
    })
    res.send("it's fuckin done you dumb bitch")
})

app.listen(3001, () => {
    console.log("Live and listening on port 3001")
})