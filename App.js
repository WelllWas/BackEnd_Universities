require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
let port = process.env.PORT;
const Route = require('./src/Presentation/Routes/UniversityRoutes');
const connection = require('./src/Repositories/Connection');
const connector = new connection();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());
app.use('/', Route);

connector.ConnectDB()
.then(()=>{
    app.listen(port,()=> {
        console.log('Banco de dados conectado e aplicação rodando na porta: '+ port+'!');
    });
})
.catch((err)=> console.log(err))