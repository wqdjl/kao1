import mongoose from 'mongoose';

let Schema=mongoose.Schema;

let CategorySchema=new Schema({
    id:Number,
    name:String,
    pId:Number
});



let Category=mongoose.model('Category',CategorySchema);
export default Category;