const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { usuariosGet,
        usuariosPost,
        usuarioPut,
        usuarioDelete,
        usuarioPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/',usuariosGet);

router.post('/', [

    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio y debe de ser una longitud de 6 letras').isLength({min:6}),
    check('correo','El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    // check('rol','No es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(esRoleValido),
    validarCampos
    
],usuariosPost);

router.put('/:id',[
    check('id','El id es invalido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
    
], usuarioPut);

router.patch('/', usuarioPatch);
router.delete('/', usuarioDelete );













module.exports = router;