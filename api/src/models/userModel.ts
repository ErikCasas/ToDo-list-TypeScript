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
    passwordHash:{
        type:String,
        require:true,
        trim:true
    },
    notes:[{
        type:Schema.Types.ObjectId,
        ref:'Note' 
    }],
    enabled:{
        type: Boolean,
        default: true
    },
    admin:{
        type:Boolean,
        default:false
    }
},
{
  timestamps: false,
  versionKey: false,
});

const User = new model('UserTodoApp', userSchema);

export default User