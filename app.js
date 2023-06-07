require('dotenv').config()
require('express-async-errors')


const express = require('express')
const app = express()

 const connectDB = require('./db/connect')

 const productsRouter = require('./routes/route')

const notFoundMiddleWare = require('./middleware/not-found')
const errorMiddleWare = require('./middleware/error-handler')


// middleware
app.use(express.json())


// routes
app.get('/', (req,res) => {
    res.send('<h1>Stores API</h1><a href="/api/v1/product">Products routes</a>')
})

app.use('/api/v1/product', productsRouter)

//product route

app.use(notFoundMiddleWare)
app.use(errorMiddleWare)




 const port = process.env.PORT || 3022

const start = async ()=> {
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to port http://localhost:${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()







