module.exports = {
    home: (req, res) => res.render('index'),
    contact: (req, res) => res.send("Página de Contacto"),
    about: (req, res) => res.send("Página Sobre Nosotros")
   }
