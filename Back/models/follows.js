'use strict'

var mongoose = require(mongoose);

var Schema = mongoose.Schema;

var followsSchema = Schema({
        user: {type: Schema.ObjectId, ref:'User'},
        followed: {type: Schema.ObjectId, ref:'User' }
});

module.exports = mongoose.model('Follow', followsSchema);
