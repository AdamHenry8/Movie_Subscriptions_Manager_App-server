const mongoose = require('mongoose');

let MoviesSchema = new mongoose.Schema({
    name: String,
    year_premiered: Number,
    generes: [String],
    image_url: String
});

module.exports = mongoose.model('movies', MoviesSchema);






