require('dotenv').config();

const  Server  = require('./models/server');




const servidor = new Server();

servidor.listen();



//Nota: si borro accidentalmente alguna carpeta o quiero volver a la version basica del cascaron vacio
//usar el siguiente comando de git: git checkout -- .