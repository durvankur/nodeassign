require("dotenv").config();
const { promisify } = require('util');
const { createPool } = require("mysql");

const pool = createPool({
	host: process.env.host,
	user: process.env.user,
	password: process.env.password,
	database: process.env.database,
	multipleStatements: true,
	connectionLimit: 10,
});

pool.getConnection((error, connection) => {
	if (error) {
		return console.error('error: ' + error.message);
	}
	connection.connect();
	console.log('Connected to the server.');
});
const query = promisify(pool.query).bind(pool);

module.exports = query;





/*************
 * 
 * this commented part of connecting single client connection
 * 
 */

// const mysql = require("mysql");

// for client connection only
// const conn = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'root123',
// 	database: 'swarajya',
// 	multipleStatements: true
// });

// this is for single clinet connection
// conn.connect((err) => {
// 	if (err) {
// 	  return console.error('error: ' + err.message);
// 	}
// 	console.log('Connected to the server.');
//   });

// module.exports = conn;
