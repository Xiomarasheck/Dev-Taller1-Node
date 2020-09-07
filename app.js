const express = require("./node_modules/express");
const bodyParser = require('body-parser');
const appServer = express () ;
const myUser = require ('./models/user')

// Middleware

appServer.use(bodyParser.urlencoded({ extended: false }));
appServer.use(bodyParser.json());
appServer.use(express.json());


let usuario = {
    nombre:'',
    apellido: ''
   };
   let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
   };


// #Get 

appServer.get ( '/getrequest',
(req,res) => { 
    res.send ('This is a get request');
    }
);

// #Post 

appServer.post ( '/postrequest',
(req,res) => { 
    res.send ('This is a post request');
    }
);


// #Delete

appServer.delete ( '/deleterequest',
(req,res) => { 
    res.send ('This is a delete request');
    }
);


// #Put 

appServer.put ( '/putrequest',
(req,res) => { 
    res.send ('This is a put request');
    }
);


// #Servicio User


// #GetFormatoUser 

appServer.get ('/user', (req, res) =>{

    res.json (myUser);

});

// #GetUsuarios 

appServer.get ('/usuarios', (req, res) =>{

   /* usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        carrera: req.body.carrera
       }; 
       
       console.log(usuario);*/

          console.log(req.body);     



       res.send(req.body);
});


// #PostUser 

appServer.post ( '/adduser',
(req,res) => { 

    if(req.body.nombre !== '' || req.body.apellido !== '') {
        respuesta = {
         error: true,
         codigo: 503,
         mensaje: 'El usuario ya fue creado previamente'
        };
        }        else {
            usuario = {
             nombre: req.body.nombre,
             apellido: req.body.apellido
            };
         }; 

         respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Usuario creado',
            respuesta: usuario
           };
    
    console.log(req.body);
    
    res.send ('respuesta');
    }
);


appServer.post ( '/updateuser/:idUser', 
(req,res) => { 
    console.log(req.body);
    console.log(req.params.idUser);
    res.send ('usuario agragado');
    }
);



// #Ejemplos

appServer.get ('/',
    (req,res) => {
        res.send ('HELLO EXPRESS WORLD WITH JS');
    }    
);

appServer.get( '/myinfo',
(req,res) => {
    res.send ('THIS IS MY INFO - JUAN');
    }
);

appServer.get( '/myjob',
(req,res) =>{ 
    res.send ('THIS IS  JOB - DEVELOPER');
    }      
);




appServer.listen (3000,
    () => {
        console.log('SERVER RUNNING ON PORT 3000');
    }
);
