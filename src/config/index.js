require('dotenv').config()
const { urlencoded } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')


//database connection
require('./database')


//bodyparser configuration
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cors configuration
app.use(cors())

//routes
// app.use('/user', require('../api/routes/userroutes'))
app.use('/vocab', require('../api/routes/vocabRouter'))




// app.listen(process.env.PORT,console.log(`Server is running at ${process.env.PORT}`))
app.listen(process.env.PORT,console.log(`Server is running at ${process.env.PORT}`))