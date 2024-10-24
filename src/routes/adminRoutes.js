const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("vista de  /admin/"));
router.get('/create', (req, res) => res.send("vista para crear un nuevo producto"));
router.post('/create', (req, res) => res.send("ruta para agregar un nuevo producto"));
router.get('/edit/:id', (req, res) => res.send("vista para editar un producto en particular"));
router.put('/edit/:id', (req, res) => res.send("vista para confirmar la edición"));
router.delete('/delete/:id', (req, res) => res.send("vista para eliminar un producto en particular"));




module.exports = router;