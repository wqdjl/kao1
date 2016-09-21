import mongoose from 'mongoose';

let userSchema=new mongoose.Schema({
    id:Number,
    name:String,
    birthday:Date,
    password:String,
    sex:Boolean,
    
});

let user=mongoose.model('user',userSchema);

export default user;