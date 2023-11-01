const express = require("express");
const URL = 'https://6542c1bf01b5e279de1f88b2.mockapi.io/users/';

const app = express();
const port = 3000; // Puerto en el que se ejecutará la aplicación

const USERS  = require("https://6542c1bf01b5e279de1f88b2.mockapi.io/users.json");
function user () {
  console.log("HOLA")
}
user()
let getId = document.getElementById("inputGet1Id").value;

const CONTAINER = document.getElementById("container");

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});

document.getElementById("BtnGet1").addEventListener("click", () => {
  if (getId) {
    app.get(`${URL}/:id`, (req, res) => {
      res.send('¡Hola, mundo!');
      res.
      array[req.params.id - 1]
    });
  } else {
    app.get(`${URL}`, (req, res) => {
      res.send('¡Hola, mundo!');
    });
  }
})

//POST
app.post(`${URL}`, (req, res) =>{
  
const chinchulin = req.body;
URL.push(chinchulin);

});




// //PUT
// app.put(`${URL}/:id`, (req,res) => {

//   const id = parseInt(req.params.id);
  
//   const PUTID = document.getElementById("inputPutId").value;



//   document.getElementById("btnPut").addEventListener("click", () => {
//     if (PUTID && PUTID > 0) {
//       app.get(`${URL}/:id`, (req, res) => {
//         res.send('¡Hola, mundo!');
  
//         array[req.params.id - 1]
//       });
//     } else {
//       app.get(`${URL}`, (req, res) => {
//         res.send('¡Hola, mundo!');
//       });
//     }
//   })
  
// });











// //DELETE
// let inputDelete = getElementById("inputdelete").value;
// let btnDelete = getElementById("btnDelete");

// // Ruta para eliminar un registro por ID

// app.delete(`${URL}/:id`, (req, res) => {
//   const id = parseInt(req.params.id);
//   // Busca el registro por ID

//   const indice = array.findIndex((inputDelete) => array.id === inputDelete);

//   if (indice === -1) {
//     return res.status(404).json({ error: 'Registro no encontrado' });
//   }

//   // Elimina el registro y guárdalo para enviarlo como respuesta
  
//   const registroEliminado = array.splice(indice, 1)[0];

//   res.json(registroEliminado);
// });
