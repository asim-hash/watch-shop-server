import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

const URL ="mongodb+srv://asim:moi123@cluster0.l5zf0.mongodb.net/new-watch-shop?retryWrites=true&w=majority"

console.log(URL)

const connectDB = async () => {
    try {
        const newConnect = mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true})
        console.log("DB is connected".bgCyan)
    } catch (e){
console.log("Error in data base".bgRed)
    }
}
 export default connectDB
