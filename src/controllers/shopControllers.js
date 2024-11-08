const { getAll } = require('../models/productModels');


module.exports = {
    shop: async (req, res) => {

        const data = await getAll();
       
        res.render('shop/shop', {
            title: 'Productos',
            data
        });
        
        console.log(data);
    },

    item: (req, res) => {
        res.render('shop/item');
    },

    addItem: (req, res) => res.send("esta es la ruta para agregar un item al carrito"),

    cart: (req, res) => {
        res.render('shop/cart');
    },

    addCart: (req, res) => res.send("ruta para proceder a la compra")
};
