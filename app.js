const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const formidable = require('formidable');
const fs = require('fs')

const h0 = require('./controllers/h0')
const h1 = require('./controllers/h1')
const h2 = require('./controllers/h2')
const h3 = require('./controllers/h3')
const h4 = require('./controllers/h4')
const h5 = require('./controllers/h5')

const fileName = [];


app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accet");
    next();
})

app.get('/', (req,res) => {
    res.send("Hey fuckface.");
});

app.post('/0', (req,res) => {h0.handleH0(req, res)});
app.post('/1', (req,res) => {h1.handleH1(req, res)});
app.post('/2', (req,res) => {h2.handleH2(req, res)});
app.post('/3', (req,res) => {h3.handleH3(req, res)});
app.post('/4', (req,res) => {h4.handleH4(req, res)});
app.post('/5', (req,res) => {h5.handleH5(req, res)});


app.post('/upload', (req,res) => {
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
        console.error('Error', err)
        throw err
    }
    console.log('Fields', fields);
    console.log('Files', files);

    for (const file of Object.entries(files)) {
        console.log("The file is", file[1].name);
        res.status(200).send(file[1].name + ' ' + "is fuckin uploaded you dumb bitch!")
        fileName.push(file[1].name);
        return console.log(fileName);
        }
    })
});

// Okay, got dl working!
// Just need to connect the upload above with the DL below!

app.get('/download', (req, res) => {
    res.download('./uploads/Why NRC Bullets[ms].docx')
})

module.exports = app;