const mongoose = require('mongoose')

mongoose.connet("mongoURI", {
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex :
    true, useFindAndModify : false
}).then(() => console.log('MongoDB Connected..')).catch(err=>console.log(err))

