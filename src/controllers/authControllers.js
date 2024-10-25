module.exports = {
    login: (req, res) => res.send("vista de login"),
    doLogin: (req, res) => res.send("ruta que válida datos del login"),
    register: (req, res) => res.send("vista de register"),
    doRegister: (req, res) => res.send("ruta que crea nuevo usuario"),
    logout: (req, res) => res.send("ruta que cierra sesión"),
}