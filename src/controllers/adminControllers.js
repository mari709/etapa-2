module.exports = {
    admin: (req, res) => res.render('admin/admin'),
    createView: (req, res) => res.render('admin/create'),
    createItem: (req, res) => res.send("ruta para agregar un nuevo producto"),
    editView: (req, res) => res.render('admin/edit'),
    editItem: (req, res) => res.send("vista para confirmar la edición"),
    delete: (req, res) => (req, res) => res.send("vista para eliminar un producto en particular")
}