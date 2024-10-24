const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => res.send("vista de login"));
router.post('/login', (req, res) => res.send("ruta que válida datos del login"));
router.get('/register', (req, res) => res.send("vista de register"));
router.post('/register', (req, res) => res.send("ruta que crea nuevo usuario"));
router.get('/logout', (req, res) => res.send("ruta que cierra sesión"));



module.exports = router;