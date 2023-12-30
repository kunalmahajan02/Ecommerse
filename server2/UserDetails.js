const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
    fname : {
        type: String,
        trim: true,
        required:true
    }, 
    lname : {
        type: String,
        trim: true,
        required:true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type: String,
        trim: true,
        required:true
    }
}, {
    collection : "UserInfo",
}
);

mongoose.model("UserInfo", UserDetailsSchema);