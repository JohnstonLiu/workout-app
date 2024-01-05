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

export async function postSplit(title, contents) {
    const [result] = await pool.query(`
    INSERT INTO splits (title, contents)
    VALUES (?, ?)
    `, [title, contents])
    const id = result.insertId;
    return getSplit(id);
}

export async function deleteSplit(id) {
    const split = getSplit(id);
    await pool.query(`
    DELETE
    FROM splits
    WHERE id = ?
    `, [id]);
    return split;
}

export async function patchSplit(id, title, contents) {
    await pool.query(`
    UPDATE splits
    SET title = ?, contents = ?
    where id = ?
    `, [title, contents, id]);
    return getSplit(id);
}

export async function getWorkout(workout_id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM workouts
    WHERE id = ?
    `, [workout_id]);
    return rows[0];
}

export async function getWorkouts(split_day_id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM workouts
    WHERE split_day_id = ?
    `, [split_day_id]);
    return rows;
}

export async function postWorkout(exercise_id, set_count, rep_lb, rep_ub, split_day_id) {
    const [result] = await pool.query(`
    INSERT INTO workouts (exercise_id, set_count, rep_lb, rep_ub, split_day_id)
    VALUES (?, ?, ?, ?, ?)
    `, [exercise_id, set_count, rep_lb, rep_ub, split_day_id])
    const id = result.insertId;
    return getWorkout(id);
};

export async function getSplitDays(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM split_days 
    WHERE split_id = ?
    `, [id]);
    return rows;
};

export async function getExercise(exercise_id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM exercises
    WHERE id = ?
    `, [exercise_id]);
    return rows[0];
}

export async function getExercises(user_id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM exercises
    WHERE user_id = ?
    `, [user_id]);   
    return rows;
};

export async function postExercise(title, user_id) {
    const [result] = await pool.query(`
    INSERT INTO exercises (title, user_id)
    VALUES (?, ?)
    `, [title, user_id]);   
    const exercise_id = result.insertId;
    return getExercises(exercise_id);
};
       