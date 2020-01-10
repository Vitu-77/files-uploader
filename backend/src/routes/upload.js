const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const path = require('path');
const fs = require('fs');

router.post('/', uploadController);

router.get('/', (req, res) => {

    const { position } = req.query;

    const folderPath = `${process.cwd()}/uploads`;
    const files = fs.readdirSync(folderPath);
    const arrayPaths = [];

    files.forEach(file => {
        const filePath = `${folderPath}/${file}`;
        arrayPaths.push(filePath);
    });

    res.sendFile(arrayPaths[position]);
});

module.exports = router;