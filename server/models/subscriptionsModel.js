const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;


let SubscriptionsSchema = new mongoose.Schema({
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movies"
    },
    member_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "members"
    },
    date: String
});

module.exports = mongoose.model('subscriptions', SubscriptionsSchema);















