const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');



const usuariosGet =  (req = request, res = response) => {

    const {nombre} = req.query;

    res.json({
        msg:'get API - Controlador',
        nombre

    });

};
const usuariosPost = async (req = request, res = response) => {

    
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol});
    
    // Verificar si el correo existe

    

    // Encirptar la contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password,salt)

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario
    });
};


const usuarioPatch = (req,  res = response) => {
    
    res.json({
        msg:'patch API- Controlador',
    });
    
};

const usuarioPut = async(req, res = response) => {
    
    const { id } = req.params;
    const { password, google,correo, ...resto } = req.body;

    //TODO: Validar contra base de datod
    if(password ){
    const salt = bcrypt.genSaltSync();
    resto.password = bcrypt.hashSync(password,salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id,resto)

    res.json({
        msg:'put API- Controlador',
        usuario
    });

};

const usuarioDelete = (req, res = response) => {

    res.json({
        msg:'Delete API- Controlador'
    });
    
};

module.exports = {

    usuariosGet,
    usuariosPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}