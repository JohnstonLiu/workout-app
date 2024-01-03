import dotenv from 'dotenv'
dotenv.config();
import mysql from 'mysql2';

const pool = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}).promise();


export async function getSplits() {
    const [rows] = await pool.query("SELECT * FROM splits");
    return rows;
}

export async function getSplit(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM splits
    WHERE id = ?
    `, [id]);
    return rows[0];
}

export async function createSplit(title, contents) {
    const [result] = await pool.query(`
    INSERT INTO splits (title, contents)
    VALUES (?, ?)
    `, [title, contents])
    const id = result.insertId;
    return getSplit(id);
};

export async function getWorkouts() {
    const [rows] = await pool.query("SELECT * FROM workouts");
    return rows;
}

export async function getWorkout(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM workouts 
    WHERE id = ?
    `, [id]);
    return rows[0];
}

export async function createWorkout(title, contents) {
    const [result] = await pool.query(`
    INSERT INTO workouts (title, contents)
    VALUES (?, ?)
    `, [title, contents])
    const id = result.insertId;
    return getWorkout(id);
};