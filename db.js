const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'okuryliuk',
    password: 'securepass',
    database: 'register_users'
}).promise();

module.exports = pool;