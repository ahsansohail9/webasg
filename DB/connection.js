const mongoose = require('mongoose');

const URI='mongodb+srv://ahsan:123@cluster0.vc5ck.mongodb.net/Cluster0?retryWrites=true&w=majority';

const connectDB = async ()=>{
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true  });
    console.log("Connection Established");
}

module.exports=connectDB;