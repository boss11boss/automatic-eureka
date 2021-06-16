let mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("DATABASE connected"))
.catch(err=>console.log(err))