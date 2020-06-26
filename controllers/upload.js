
const formidable = require('formidable');

const handleUpload = (req, res) => {
new formidable.IncomingForm({uploadDir: './uploads', 
maxFileSize: 5 * 1024 * 1024, keepExtensions: true, })

    .parse(req, (err, fields, files) => {
        
        if (err) {
            console.log(err)
            throw err
        }
        })

    .on('file', (name, file) => {
        res.status(200).send(JSON.stringify(file.path))
        })

};

module.exports = {
    handleUpload
}