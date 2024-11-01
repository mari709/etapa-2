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
pool.getConnection((error, connection) => { //1° parámetro error, 2°parámetro conexión realizada
    if (error) {
        console.error('error al obtener la conexión a la base de datos', error);
        } else {
            console.log('conexión a la base de datos exitosa');
            connection.release(); //libero conexión
        }
});

module.exports = {
    conn: pool.promise()
};