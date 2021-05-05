const { response, request } = require('express');

const usuariosGet =  (req = request, res = response) => {

    const {nombre} = req.query;

    res.json({
        msg:'get API - Controlador',
        nombre

    });

};
const usuariosPost =  (req = request, res = response) => {

    const {nombre, edad} = req.body;
    
    
    res.json({
        msg:'post API- Controlador',
        edad,
        nombre,
    });
};


const usuarioPatch = (req,  res = response) => {
    
    res.json({
        msg:'patch API- Controlador',
    });
    
};

const usuarioPut = (req, res = response) => {
    
    const { id } = req.params;
    res.json({
        msg:'put API- Controlador',
        id,
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