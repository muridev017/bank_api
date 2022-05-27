//aqui eu conecto o banco de dados

const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const pathArchive = path.resolve(__dirname, 'database.db')
const CreateTables = require('./createTable')

const conection = new sqlite3.Database(pathArchive)

conection.serialize(() => {
    CreateTables.init(conection);
});

module.exports=conection