const uniRepository = require('../Repositories/UniRepository')

class uniServices{
    constructor(){
        this.repository = new uniRepository();
    }

    async postUniversities(){
        try{
            const countriesArray =
                [
                    "argentina",
                    "brasil",
                    "chile",
                    "colombia",
                    "paraguai",
                    "peru",
                    "suriname",
                    "uruguay"
                ]


            let response = await this.repository.postUniversities(countriesArray);
            return{
                statusCode: response.statusCode,
                body: response.body
            }
        }catch(e){
            return {
                statusCode: e.status || 502,
                body: e.message
            }
        }
    }

    async get(country, page){
        try{
            let response = await this.repository.get(country, page);
            return{
                statusCode: response.statusCode,
                body: response.body
            }
        }catch(e){
            return {
                statusCode: e.status || 502,
                body: e.message
            }
        }
    }

    async getById(id){
        try{
            let response = await this.repository.getById(id);
            return{
                statusCode: response.statusCode,
                body: response.body
            }
        }catch(e){
            return {
                statusCode: e.status || 502,
                body: e.message
            }
        }
    }

    async create(uni){
        if(!uni.alpha_two_code || !uni.web_pages || !uni.name || !uni.country || !uni.domains || !uni.state_province){
            return {
                statusCode: 400,
                body: "Missing Parameters!"
            }
        }

        try{
            let response = await this.repository.create(uni);
            return {
                statusCode: response.statusCode,
                body: response.body
            }
        }catch(e){
            return {
                statusCode: e.status || 502,
                body: e.message
            }
        }
    }

    async update(uni){
        if(!uni.bodyParams.web_pages || !uni.bodyParams.name || !uni.bodyParams.domains){
            return {
                statusCode: 400,
                body: "Missing Parameters!"
            }
        }

        try{
            let response = await this.repository.update(uni);
            return {
                statusCode: response.statusCode,
                body: response.body
            }
        }catch(e){
            return {
                statusCode: e.status || 502,
                body: e.message
            }
        }
    }

    async delete(id){
        try{
            let response = await this.repository.delete(id);
            return {
                statusCode: response.statusCode,
                body: response.body
            }
        }catch(e){
            return {
                statusCode: e.status || 502,
                body: e.message
            }
        }
    }

    async deleteAll(){
        try{
            let response = await this.repository.deleteAll();
            return {
                statusCode: response.statusCode,
                body: response.body
            }
        }catch(e){
            return {
                statusCode: e.status || 502,
                body: e.message
            }
        }
    }
}

module.exports = uniServices;