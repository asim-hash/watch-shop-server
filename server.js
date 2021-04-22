import express from 'express'
import dotenv from 'dotenv'
import connectDB from './connectDB/connection.js'
import productsRouter from "./routes/productsRouter.js"
import userRoutes from "./routes/userRoutes.js";

dotenv.config()
const server = express()

connectDB()
const PORT = process.env.PORT || 8080
server.use(express.json())
server.use('/api/v1/products',productsRouter)
server.use('/api/v1/users',userRoutes)

server.get('/api/v1/test', (req,res) => {
    res.json('ser is started')
})


server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
