const express = require('express');
const router = express.Router();
require('dotenv').config();
const uniController = require('../Controllers/UniController')

    router.post('/universities/register', async (req, res) => {
        try {
            const controller = new uniController();
            const response = await controller.postUniversities();
            res.status(response.statusCode).send(response.body);
        } catch (e) {
            const status = e.status || 502;
            res.status(status).send(e.message);
        }
    })

    router.get('/universities', async (req, res) => {
        try {
            const page = req.query.page;
            const country = req.query.country;
            const controller = new uniController();
            const response = await controller.get(country, page);
            res.status(response.statusCode).send(response.body);
        } catch (e) {
            const status = e.status || 502;
            res.status(status).send(e.message);
        }
    })

    router.get('/universities/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const controller = new uniController();
            const response = await controller.getById(id);
            res.status(response.statusCode).send(response.body);
        } catch (e) {
            const status = e.status || 502;
            res.status(status).send(e.message);
        }
    })

    router.post('/universities', async (req, res) => {
        try{
            const uni = {alpha_two_code, web_pages, name, country, domains, state_province} = req.body;
            const controller = new uniController();
            const response = await controller.create(uni);
            res.status(response.statusCode).send(response.body);
        }catch(e){
            const status = e.status || 502;
            res.status(status).send(e.message);
        }
    })

    router.put('/universities/:id', async (req, res) => {
        try{
            const id = req.params.id;
            const bodyParams = {web_pages, name, domains} = req.body;
            const uni = {bodyParams, id};
            const controller = new uniController();
            const response = await controller.update(uni);
            res.status(response.statusCode).send(response.body);
        }catch(e){
            const status = e.status || 502;
            res.status(status).send(e.message);
        }
    })

    router.delete('/universities/:id', async (req, res) => {
        try{
            const id = req.params.id;
            const controller = new uniController();
            const response = await controller.delete(id);
            res.status(response.statusCode).send(response.body);
        }catch(e){
            const status = e.status || 502;
            res.status(status).send(e.message);
        }
    })

    router.delete('/universitiesDeleteAll', async (req, res) => {
        try{
            const controller = new uniController();
            const response = await controller.deleteAll();
            res.status(response.statusCode).send(response.body);
        }catch(e){
            const status = e.status || 502;
            res.status(status).send(e.message);
        }
    })

module.exports = router;