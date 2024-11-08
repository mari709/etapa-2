const { conn } = require('../config/conn');

//obtener todos los productos
const getAll = async () => {
    try {
        const [rows] = await conn.query(`
            SELECT product.*, category.category_name 
            FROM product 
            LEFT JOIN category ON product.category_id = category.category_id
        `);
        return rows;
        
    } catch (error) {
        return {
            error: true,
            message: 'Hemos detectado un error: ' + error
        };
    } finally {
        conn.releaseConnection();
    }
}

//obtener 1 producto
const getOne = async (param) => {
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', param);
        return rows;
        
    } catch (error) {
        return {
            error: true,
            message: 'hemos encontrado un error en: ' + error
        } 
    } finally {
        conn.releaseConnection();
    }
}

//create item
const create = async(params) =>   {
    try {
        const [product] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, img_product, category_id) VALUES ?;', [params]);

        return product;
    } catch (error) {
        return {
            error: true,
            message: 'hemos encontrado un error en: ' + error
        } 
    } finally {
        conn.releaseConnection();
    }
}

const edit = async(params, id) =>   {
    try {
        const [product] = await conn.query('UPDATE product SET ? WHERE ?', [params, id]);

        return product;
    } catch (error) {
        return {
            error: true,
            message: 'hemos encontrado un error en: ' + error
        } 
    } finally {
        conn.releaseConnection();
    }
}

const deleteOne = async(params) =>   {
    try {
        const [product] = await conn.query('DELETE FROM product WHERE ?', params);
        return product;
    } catch (error) {
        return {
            error: true,
            message: 'hemos encontrado un error en: ' + error
        } 
    } finally {
        conn.releaseConnection();
    }
}

module.exports = {
    getAll, 
    getOne,
    create,
    edit,
    deleteOne
}