const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const University = new mongoose.Schema({
    alpha_two_code: String,
    web_pages: Array,
    name: String,
    country: String,
    domains: Array,
    state_province: String
})

University.plugin(mongoosePaginate);
const model = mongoose.model('University', University);

module.exports = model;