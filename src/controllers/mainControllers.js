module.exports = {
    home: (req, res) => 
        res.render('index', {
            title: 'Inicio'
        }),
    contact: (req, res) => 
        res.render('contact', {
            title: 'Contacto'
        }),
    about: (req, res) => res.render('about', {
        title: 'Sobre nosotros'
    })
}
