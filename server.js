const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const formidable = require('formidable');

const h0 = require('./controllers/h0')
const h1 = require('./controllers/h1')
const h2 = require('./controllers/h2')
const h3 = require('./controllers/h3')
const h4 = require('./controllers/h4')
const h5 = require('./controllers/h5')


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
        console.log(file);
    }
    })
    res.send("it's fuckin done you dumb bitch")
})

app.listen(3001, () => {
    console.log("Live and listening on port 3001")
})