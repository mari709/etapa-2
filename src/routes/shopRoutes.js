const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("vista de  /shop/"));
router.get('/item:id', (req, res) => res.send("vista de un item en particular"));
router.post('/item:id/add', (req, res) => res.send("esta es la ruta para agregar un item al carrito"));
router.get('/cart', (req, res) => res.send("vista del carrito"));
router.post('/cart', (req, res) => res.send("ruta para proceder a la compra"));




module.exports = router;