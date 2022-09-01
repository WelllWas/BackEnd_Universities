require('dotenv').config();
const user = process.env.DB_USER;
const password = encodeURIComponent(process.env.DB_PASSWORD);
const mongoose = require('mongoose');

class Connection{

    async ConnectDB(){
        mongoose.connect(`mongodb+srv://${user}:${password}@apicluster.eq1jrsa.mongodb.net/bancoUni?retryWrites=true&w=majority`)
        return
    }
    
}

module.exports = Connection;