const fs = require('fs');
const IncomingForm = require('formidable').IncomingForm;

const uploadController = (req, res) => {

    const form = new IncomingForm();
    const maxFileSize = Math.pow(1024, 8)
    form.maxFileSize = maxFileSize;

    form.parse(req, (err, fields, files) => {

        console.log({ fields })
        console.log({ files })

        // if (err) {
        //     console.error('Error', err);
        //     throw err;
        // }
        // else {
        //     const fileType = file.type.replace('image/', '');
        //     const fileName = `podcast-${Date.now()}.${fileType}`;
        //     const folderPath = `${process.cwd()}/uploads`;
        //     const oldPath = file.path;
        //     const newPath = `${folderPath}/${fileName}`;

        //     fs.rename(oldPath, newPath, (error) => {
        //         if (error) {
        //             throw error;
        //         }
        //         else {
        //             res.end();
        //         }
        //     });
        // }
    });
}

module.exports = uploadController;