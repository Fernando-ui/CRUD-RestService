// Extraemos el put patch get deleted...
const { Router } = require('express');

// Importamos las instancias de las rutas
const { usuariosGet,
        usuariosPost,
        usuarioPut,
        usuarioDelete,
        usuarioPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/',usuariosGet);
router.post('/',  usuariosPost);
router.put('/:id', usuarioPut);
router.patch('/', usuarioPatch)
router.delete('/', usuarioDelete );













module.exports = router;