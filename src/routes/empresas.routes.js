const express = require('express');
const usuariosController = require('../controllers/usuarios.controller');
const md_autentificacion = require('../middlewares/aut');

var app = express.Router();

app.get('/empresas', usuariosController.ObtenerUsuarios),
app.post('/login', usuariosController.Login);
app.get('/empresasId/:id',md_autentificacion.Auth, usuariosController.ObtenerUsuariosId),
app.post('/agregarEmpresa', usuariosController.RegistrarEmpresas);
app.post('/agregarEmpresaAdmin', usuariosController.AgregarEmpresasDesdeAdmin);
app.put('/editarEmpresa/:idUsuario', usuariosController.EditarUsuarios);
app.delete('/eliminarEmpresa/:idUsuario',md_autentificacion.Auth, usuariosController.EliminarUsuarios);

app.get('/usuarioLogueado',md_autentificacion.Auth, usuariosController.ObtenerUserLogueado),

 
module.exports = app;