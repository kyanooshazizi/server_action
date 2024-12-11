const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const schema=new Schema({
    username:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
export default mongoose.models.userModel||mongoose.model('userModel',schema);