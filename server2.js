// A SIMPLE SERVER USING Express.JS METHODE


const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
});

const server = app.listen(port, () =>{
    console.log('Server ready!!!!!');
});

// server.on('connection', (stream) => {
//     console.log('someone connected!');
// });


// process.on('SIGTERM', () =>{
//     server.close(()=>{
//         console.log('Process Terminated !');
//     });
// });