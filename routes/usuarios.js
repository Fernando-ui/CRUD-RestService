// Extraemos el put patch get deleted...
const { Router } = require('express');
const { check } = require('express-validator');

// Importamos las instancias de las rutas
const { usuariosGet,
        usuariosPost,
        usuarioPut,
        usuarioDelete,
        usuarioPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/',usuariosGet);
router.post('/', [

    check('correo','El correo no es valido').isEmail(),

],usuariosPost);
router.put('/:id', usuarioPut);
router.patch('/', usuarioPatch)
router.delete('/', usuarioDelete );













module.exports = router;