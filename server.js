const express = require("express")
const cors = require("cors")
const colors = require("colors")




//middleares
const app = express()


var corOptions = {
    origin: 'http://localhost:8081'
}


app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//routers
const router = require('./routes/productRouter.js')
app.use('/api/products', router)



//testing api
app.get('/', (req, res) => { message: 'Hello API' })


//port 
const PORT = process.env.PORT || 8080


//server
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`.bgMagenta.white
    )
})
