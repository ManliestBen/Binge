const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvshowSchema = new Schema({

}, { timestamps: true })

module.exports = mongoose.model('Tvshow', tvshowSchema);