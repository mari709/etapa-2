module.exports = {
   /*si quiero que el index sea "Home"
    home: (req, res) => {
        res.render('index');
    },
    */
    home: (req, res) => res.send("Página de Home"),
    contact: (req, res) => res.send("Página de Contacto"),
    about: (req, res) => res.send("Página Sobre Nosotros")
   }
