const mongoose=require('mongoose')
const Schema=mongoose.Schema


const todo= new Schema({
    fullname: {
        type:String,
        required: true
    },
    description: {
        type:String
    }
    // status: {
    //     type:Boolean,
    //     required: true
    // },

},{timestamps: true});

const Todo= mongoose.model('Todo', todo)

module.exports=Todo