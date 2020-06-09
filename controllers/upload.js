
const formidable = require('formidable');

const handleUpload = (req, res) => {
new formidable.IncomingForm({uploadDir: './uploads', 
maxFileSize: 5 * 1024 * 1024, keepExtensions: true, })

    .parse(req, (err, fields, files) => {
        
        if (err) {
            console.error('Error', err)
            throw err
        }
        //console.log('Fields', fields);
        //console.log('Files', files);
        })

    .on('file', (name, file) => {
        //h0.handleH0(req,res, file);
        res.status(200).send(JSON.stringify(file.path))
        })

};

module.exports = {
    handleUpload
}