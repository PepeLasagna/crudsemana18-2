const URL = `https://6542c1bf01b5e279de1f88b2.mockapi.io/users/`;
let endpoint = ""
const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará la aplicación



app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});

app.get("/", (req, res) => {
    
});

app.get

//POST
//PUT
//DELETE