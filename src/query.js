const { Client } = require('pg');
const client = new Client({
    user: 'devscom',
    host: 'postgres_db',
    database: 'devscom',
    password: 'guinee',
    port: 5432,
});


client.connect();

const getUsers = async (request, response) => {
    client.query("SELECT * FROM users ORDER BY id ASC", (err, results) => {
        if (err) {
            throw err;
        }
        response.status(200).send(results.rows);
    })
};

const getUserById = async (request, response) => {
    const id = parseInt(request.params.id);
    
    client.query("SELECT * FROM users WHERE id=$1", [id], (err, results) => {
        if (err) {
            throw err;
        }
        response.status(200).send(results.rows[0]);
    })
};

const createUser = async (request, response) => {
    const {name, age} = request.body;
    
    client.query("INSERT INTO users(name , age) VALUES($1, $2)", [name, age], (err, results) => {
        if (err) {
            throw err;
        }
        response.status(200).send(`inserted, id = ${results.id}`);
    })
};

const updateUser = async (request, response) => {
    const {name, age} = request.body;
    const id = parseInt(request.params.id);
    
    client.query("UPDATE users SET name = $1, age = $2 WHERE id = $3", [name, age, id], (err, results) => {
        if (err) {
            throw err;
        }
        response.status(200).send(`update, id = ${results.id}`);
    })
};

const deleteUser = async (request, response) => {
    const id = parseInt(request.params.id);
    
    client.query("DELETE FROM users WHERE id = $1", [id], (err, results) => {
        if (err) {
            throw err;
        }
        response.status(200).send(`deleted, id = ${results.id}`);
    })
};

module.exports = {
    getUsers, getUserById, createUser, updateUser, deleteUser
};
