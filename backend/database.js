const mysql = require('mysql2');

const pool = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = pool.promise();


async function getSplits() {
    const [rows] = await pool.query("SELECT * FROM splits");
    return rows;
}

async function getSplit(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM splits
    WHERE id = ?
    `, [id]);
    return rows;
}