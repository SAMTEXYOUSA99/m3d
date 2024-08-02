const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');
//const socketio = require('socket.io');
//const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Todas as rotas devem servir o index.html do build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

mongoose.connect('mongodb+srv://studiomprojeto3d:studiomprojeto3d@m3d.wzn7h7u.mongodb.net/?retryWrites=true&w=majority&appName=m3d')



app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(4444);