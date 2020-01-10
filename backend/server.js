const express = require('express');
const cors = require('cors');
const server = express();
const path = require('path');

const PORT = process.env.PORT || 3333;

const corsOptions = {
    origin: '*',
    optionsSucessStatus: 200,
}

const uploadRoute = require('./src/routes/upload');

server.use(express.static('uploads'));

server.use(cors(corsOptions));
server.use(uploadRoute);

server.listen(PORT, () => {
    console.log(`> Server is running on the port ${PORT}`);
})