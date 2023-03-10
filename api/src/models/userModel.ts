const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name:{
        type:String,
        require: true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim: true
    },
    password:{
        type:String,
        require:true,
        trim:true
    }
});

const User = new model('UserTodoApp', userSchema);

export default User