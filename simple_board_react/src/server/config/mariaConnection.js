module.exports = () => {
    const mariaDB = require('mariadb');
    const dbInfo = {
        host : 'localhost',
        port : 3306,
        database : 'simple_board_01',
        user : 'root',
        password : '1234'
    }

    return mariaDB.createConnection(dbInfo);
}