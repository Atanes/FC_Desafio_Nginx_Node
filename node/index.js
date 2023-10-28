const express = require('express');
const mysql = require('mysql');
const app = express();

const port = 3000;
const config = {
	host: 'db',
	user: 'root',
	password: 'password',
	database: 'nodedb',
};

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(person_name) values('Atanes')`;
const select = `SELECT * FROM people`;
let people = [];
connection.query(sql);
connection.query(select, (err, rows) => (people = rows));
connection.end();

app.get('/', (req, res) => {
	let html = '<h1>Full Cycle Rocks!</h1>';
	people.forEach((person) => html += `<p> - ${person.person_name}</p>`);
	res.send(html);
});

app.listen(port, () => {
	console.log('Tudo ok na porta ' + port);
});
