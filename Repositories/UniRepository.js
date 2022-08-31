require('dotenv').config();
const University = require('../Models/Universities');
const mongoosePaginate = require('mongoose-paginate');
const axios = require('axios');
const e = require('express');
const uniApi = process.env.UNI_API;

class uniRepository{

    async postUniversities(countriesArray){
        try{
            for(let i = 0; i<countriesArray.length; i++){
                let universities = await axios.get(uniApi+countriesArray[i]);
                for(let i = 0; i<universities.length; i++){
                    let uni = universities[i];
                    const alreadyExists = await University.findOne({country: uni.country, state_province: uni.state_province, name: uni.name});
                    if(alreadyExists){

                    } else {
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

    async get(countryParam){
        try{
            if(countryParam){
                const data = await University.paginate({country: countryParam}, {limit:20}, {_id: 1, name: 1, country: 1, state_province:1});
                return{
                    statusCode: 200,
                    body: data
                }
            } else {
                const data = await University.paginate({}, {limit:20}, {_id: 1, name: 1, country: 1, state_province:1});
            return{
                statusCode: 200,
                body: data
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
}

module.exports = uniRepository;