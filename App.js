require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
let port = process.env.PORT;
const Route = require('./Presentation/Routes/UniversityRoutes');
const user = process.env.DB_USER;
const password = encodeURIComponent(process.env.DB_PASSWORD);
const University = require('./Models/Universities');

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());
app.use('/', Route);

mongoose.connect(`mongodb+srv://${user}:${password}@apicluster.eq1jrsa.mongodb.net/bancoUni?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(port,()=> {
        console.log('Banco de dados conectado e aplicação rodando na porta: '+ port+'!');
    });
})
.catch((err)=> console.log(err))