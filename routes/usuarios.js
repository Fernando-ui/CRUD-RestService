// Extraemos el put patch get deleted...
const { Router } = require('express');
const { check } = require('express-validator');

// Importamos las instancias de las rutas
const { usuariosGet,
        usuariosPost,
        usuarioPut,
        usuarioDelete,
        usuarioPatch } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/',usuariosGet);
router.post('/', [

    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio y debe de ser una longitud de 6 letras').isLength({min:6}),
    check('correo','El correo no es valido').isEmail(),
    check('rol','No es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos

],usuariosPost);
router.put('/:id', usuarioPut);
router.patch('/', usuarioPatch)
router.delete('/', usuarioDelete );













module.exports = router;