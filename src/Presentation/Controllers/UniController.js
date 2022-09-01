const univService = require('../../Services/UniServices')

class uniController{
    constructor(){
        this.service = new univService();
    }

    async postUniversities(){
        try{
            let response = await this.service.postUniversities();
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
        page = parseInt(page) || 1;
        try{
            let response = await this.service.get(country, page);
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
            let response = await this.service.getById(id);
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
        try{
            let response = await this.service.create(uni);
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

    async update(uni){
        try{
            let response = await this.service.update(uni);
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

    async delete(id){
        try{
            let response = await this.service.delete(id);
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

    async deleteAll(){
        try{
            let response = await this.service.deleteAll();
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

}

module.exports = uniController;