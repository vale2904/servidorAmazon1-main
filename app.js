require('dotenv').config();


let ServidorModelo=require('./models/servidorModelo.js');

let servidor= new ServidorModelo();
servidor.levantarSevidor();

  




 
