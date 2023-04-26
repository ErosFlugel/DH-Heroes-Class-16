/*
● / -> Debe direccionar al recurso index.html.
● /babbage -> Debe direccionar al recurso babbage.html
● /berners-lee -> Debe direccionar al recurso berners-lee.html.
● /clarke -> Debe direccionar al recurso clarke.html.
● /hamilton -> Debe direccionar al recurso hamilton.html.
● /hopper -> Debe direccionar al recurso hopper.html.
● /lovelace -> Debe direccionar al recurso lovelace.html.
● /turing-> Debe direccionar al recurso turing.html.
*/

//Requiring modules and libraries
const express = require("express");
const app = express();
const path = require("path");

//Declaring static elements location
app.use(express.static(path.resolve(__dirname, "./public")));

//Running the server
app.listen(3030, () => console.log("Servidor corriendo en el puerto 3030"));
