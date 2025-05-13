const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    userDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    hashtags:{
        type:String
    },
    image:{
        type:Object
    },
    datePosted:{
        type:Date,
        required:true
    },
    lastUpdated: {
        type: Date
    },
    updateCount: {
        type: Number,
        default: 0
    },
    isActive:{
        type:Boolean,
        default:false
    }

})

module.exports = new mongoose.model("posts", postSchema);