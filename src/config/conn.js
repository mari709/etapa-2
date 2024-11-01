const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mueblelandia',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit:0
});


module.exports = {
    conn: pool.promise()
};