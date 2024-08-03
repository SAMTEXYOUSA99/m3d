//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import App from './App';
//import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API pronta pra uso na porta: ${port}`)
});

app.get('/', (req, res, next) =>{
  res.json({title: "api em node.js"});
});

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/


