require("dotenv").config()
const productRoute = require("./routes/product");
//este nos va a servir para las claves importantes que no queremos que el cliente por ejemplo las vea, es un 
//archivo donde se guardan las claves importantes, imaginen que tienen una boveda y quieren poner la clave 
//para sacar todo lo que tienen, van a querer que nadie la sepa, entonces la guardariamos en este archivo.
//A esto se los llama "Variables de entorno" = .env
//vamos a crearlo y vamos a dejarlo vacio por ahora.

const express = require('express');
//Express proporciona metodos para especificar que funcion se llama para un verbo HTTP en particular
//(GET, POST, PUT, SET, etc) y patron de URL ("Ruta"), y metodos para especificar que motor de plantilla
//(vista) se usa, donde plantilla estan ubicados los archivos y que plantilla utilizar para representar una
//respuesta

const mongoose = require('mongoose');
//Mongoose es una bibloteca de modelado de datos de objetos (ODM) 
//para MongoDB, esto nos proporcionara los Schemas para generar nuestros 
//modelos de base de datos

const cors = require('cors');
/* CORS es la abreviatura de Intercambio 
de recursos de origen cruzado. 
Es un mecanismo para permitir o restringir los recursos solicitados
 en un servidor web dependiendo 
de dónde se inició la solicitud HTTP. Esta política se utiliza para
proteger un determinado servidor web 
del acceso de otro sitio web o dominio. */

const app = express(); //decimos que nuestra app va a utilizar todos los metodos de express

app.use(express.json()) //decimos que nuestra app va a utilizar la compresion de json
//siempre, la mayoria de las veces vamos a estar trabajando con archivos.json, con respuestas en json, etc

app.use(cors()) //decimos tambien que vamos a utilizar las funcionalidades de cors

//RUTAS
app.use("/api/products", productRoute);


//CONEXION A MONGODB
mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB connection Successfull!"))
.catch((err) => console.log(err));



//-----PUERTO----//

//antes de realizar el puerto volvamos a las variables de entorno
//ya tenemos nuestra variable de entorno guardada, como vieron no es muy dificil, las variables de entorno son
//muy necesearias, ahora a crear nuestro puerto


const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
});


//En esa linea de codigo estamos diciendo que nuestra app va a estar escuchando el puerto "PORT"
//que seria el puerto "5000" y cuando se inicie decimos que se va a consologear un mensaje, en mi caso
//digo que el server va a estar corriendo en el puerto donde lo asignamos

//Listo ya tenemos todo realizado como para ya correr nuestro server y ver que se inicie bien
//vayamosa nuestra terminal... y corramos el comando "npm run dev"

//PERFECTO YA TENEMOS NUESTRO SERVER CORRIENDO !!!
//si nosotros generamos un cambio vean como cambia 
//vieron se actualiza automaticamente