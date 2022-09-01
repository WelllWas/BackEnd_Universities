require('dotenv').config();
const University = require('../Models/Universities');
const mongoosePaginate = require('mongoose-paginate');
const axios = require('axios');
const uniApi = process.env.UNI_API;

class uniRepository{

    async postUniversities(countriesArray){
        try{
            for(let i = 0; i<countriesArray.length; i++){
                let universities = await axios.get(uniApi+countriesArray[i]);
                for(let i = 0; i<universities.data.length; i++){
                    let uni = universities.data[i];
                    const alreadyExists = await University.findOne({country: uni.country, state_province: uni.state_province, name: uni.name});
                    if(!alreadyExists){
                        await University.create(uni);
                    } 
                }
            }
            return {
                statusCode: 201,
                body: "Universities successfully registered!"
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
            if(country){
                let options = {
                    select:   '_id name country state_province',
                    page:   page, 
                    limit:    20
                }
                const data = await University.paginate({country: country}, options);
                if(data.docs.length>1){
                    return{
                        statusCode: 200,
                        body: data
                    }
                } else {
                    return{
                        statusCode: 404,
                        body: "No universities found!"
                    }
                }
                
            } else {
                let options = {
                    select:   '_id name country state_province',
                    page:   page, 
                    limit:    20
                }
                const data = await University.paginate({}, options);
                if(data.docs.length>1){
                    return{
                        statusCode: 200,
                        body: data
                    }
                } else {
                    return{
                        statusCode: 404,
                        body: "No universities found!"
                    }
                }
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
            const data = await University.findOne({_id: id});
            if(!data){
                return{
                    statusCode: 422,
                    body: "A universidade não foi encontrada!"
                }
            }
            return{
                statusCode: 200,
                body: data
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
            const alreadyExists = await University.findOne({country: country, state_province: state_province, name: name});
            if(alreadyExists){
                return {
                        statusCode: 409,
                        body: "University already exists!"
                    }
            } else {
                await University.create(uni);
                    return {
                        statusCode: 201,
                        body: "University created with success!"
                    }
            }
        }catch(e){
            return {
                statusCode: e.status || 502,
                body: e.message || "Internal Server Error"
            }
        }
    }

    async update(uni){
        try{
            const updatedUni = await University.findByIdAndUpdate({_id: uni.id}, uni.bodyParams);
            return {
                statusCode: 200,
                body: updatedUni
            }
        }catch(e){
            return {
                statusCode: e.status || 502,
                body: e.message || "Internal Server Error"
            }
        }
    }

    async delete(id){
        try{
            await University.findByIdAndRemove(id);
            return {
                statusCode: 200,
                body: "Successfully Deleted!"
            }
        }catch(e){
            return {
                statusCode: e.status || 502,
                body: e.message || "Internal Server Error"
            }
        }
    }

    async deleteAll(){
        try{
            await University.deleteMany({})
            return {
                statusCode: 200,
                body: "Every Document in Collection Successfully Deleted!"
            }
        }catch(e){
            return {
                statusCode: e.status || 502,
                body: e.message || "Internal Server Error"
            }
        }
    }
}

module.exports = uniRepository;