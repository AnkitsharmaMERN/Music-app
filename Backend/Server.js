const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const Route = require('./Controller/Route/Route')


const app = express()
const port = 27017


// ========================================
mongoose.set('strictQuery', true);
// =========================================

// this is the app section which features are used and mendatory to the project 
// this is for convert json during send and reciving i think   
app.use(express.json())

// this is for send and recive the cookie 
app.use(cookieParser()) 


app.use('/uplode',express.static('uplode'))


// this is for cors means connect the frontend and backend with diffrent port 
// app.use(
//     cors({
//     // origin:'*',
//     origin:'http://localhost:3000', 
        
//     // this is for send cookies to frontend
//     Credential:true,
//     optionSuccessStatus:200,
//     allowedHeaders:['Content-Type','Authorization'],
// }))

// ṭhis function is arrow function and is used to set the header to send and recive the cokkies and something api related
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,")
        

        next();
  });

// here call the Route come to the frontend like 

app.use('/api/',Route)


// here this is the connection of server/mongo database 
const mongooseUrl = 'mongodb://localhost:27017/MusicDatabase'
const dbconnection = () => {
    mongoose.connect(mongooseUrl)
        .then(() => {
            console.log('database is connected')
        })
        .catch((e) => {
            console.log(e)
        })
}

// here call the dbconnction function 
dbconnection();

// here i listen the data base is running or not 
app.listen(port,()=>{
console.log(`connection is succesful port no ${port}`)
})

