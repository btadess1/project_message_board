//require the mongoose module
var mongoose = require('mongoose');
// define Post Schema, which is a schema for a post
var PostSchema = new mongoose.Schema({
 name: {type: String, required: true},
 text: {type: String, required: true }, 
 date: {type: Date, default:Date.now},
 comments: []
}, {timestamps: true });
// define Comment Schema
var CommentSchema = new mongoose.Schema({
 name: {type: String, required: true},
 text: {type: String, required: true }, 
 date: {type: Date, default:Date.now}
}, {timestamps: true });
// set our models by passing them their respective Schemas
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
