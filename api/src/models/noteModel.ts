const { Schema, model } = require("mongoose");


const noteSchema = new Schema({
    tittle:{
        type:String,
        require: true,
        trim: true
    },
    description:{
        type:String,
        require: true,
        trim: true
    },
    status:{
        type:String,
        default: "To Do",
    },
    delete:{
        type:Boolean,
        default:false
    }
},
{
  timestamps: false,
  versionKey: false,
});

const Note = new model("Note", noteSchema);

export default Note;