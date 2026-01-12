const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'akademik',
  port: 8889
});

db.connect((err) => {
  if (err) {
    console.error('DB Error:', err);
  } else {
    console.log('MySQL Connected');
  }
});

module.exports = db;
