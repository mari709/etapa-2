const { getAll } = require('../models/productModels');
const { getOne } = require('../models/productModels');


module.exports = {
    shop: async (req, res) => {

        const data = await getAll();
       
        res.render('shop/shop', {
            title: 'Productos',
            data
        });
        
        console.log(data);
    },

    item: async (req, res) => {

        const itemId = req.params.id;
        const [item] = await getOne(itemId);

        res.render('shop/item', {
            title: 'Item',
            item
        });

        console.log(item);

    },

    addItem: (req, res) => res.send("esta es la ruta para agregar un item al carrito"),

    cart: (req, res) => {
        res.render('shop/cart');
    },

    addCart: (req, res) => res.send("ruta para proceder a la compra")
};
