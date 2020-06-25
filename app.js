const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use( (res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");;
})
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const h0 = require('./controllers/h0')
const h1 = require('./controllers/h1')
const h2 = require('./controllers/h2')
const h3 = require('./controllers/h3')
const h4 = require('./controllers/h4')
const h5 = require('./controllers/h5')
const upload = require('./controllers/upload')
const download = require('./controllers/download')
const deleter = require('./controllers/delete')



app.get('/', (req,res) => {
    res.send("Hey fuckface.");
});

app.post('/0', (req,res) => {h0.handleH0(req, res)});
app.post('/1', (req,res) => {h1.handleH1(req, res)});
app.post('/2', (req,res) => {h2.handleH2(req, res)});
app.post('/3', (req,res) => {h3.handleH3(req, res)});
app.post('/4', (req,res) => {h4.handleH4(req, res)});
app.post('/5', (req,res) => {h5.handleH5(req, res)});

app.post('/upload', (req,res) => {upload.handleUpload(req, res)});
app.post('/download', (req, res) => {download.handleDownload(req,res)});
app.post('/delete', (req,res) => {deleter.handleDelete(req,res)});
  

module.exports = app;