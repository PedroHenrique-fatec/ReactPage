import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'manager_room',
})

connection.connect((err) => {
    if (err) {
        console.error('error connecting:', err);
        return
    }

    console.log( 'connected to database ');
})

export default connection;