const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://sysdba:masterkey1@ds123625.mlab.com:23625/goweek-bateradt',
 {
    useNewUrlParser: true
})

/* app.get('/', (req, res) => {
    return res.send('Hello world');
}); */

app.use((req, res, next) =>{
 req.io = io;
 return next();
});

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

server.listen(3000, () => {
    console.log('Server NODE.JS teste started on port 3000');
});