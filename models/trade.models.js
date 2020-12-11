const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TradeSchema = new Schema({
    'ITC(HS)': {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    'HS(4)': {
        type: String,
    },
    'HS(5)': {
        type: String,
    },
    'HS(6)': {
        type: String,
    },
    'HS(8)': {
        type: String,
    },
    Policy: {
        type: String,
    },
    Condition: {
        type: String,
    },
});

const Trade = mongoose.model('details', TradeSchema)
module.exports = Trade;
