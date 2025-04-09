import mysql from 'mysql2'

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'express_demo'
})

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log('MySQL connection error:', err);
    }else{
        console.log('Connected to MySQL database');
    }  
})

export default db;