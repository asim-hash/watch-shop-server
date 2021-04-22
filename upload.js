import users from './users.js'
import products from "./products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import connectDB from "./connectDB/connection.js";
connectDB()

const exportData = async () =>{
 try{
     await User.deleteMany()
     await Product.deleteMany()

    const sampleUsers = await User.insertMany(users)
     const adminId = sampleUsers[0]._id
     const sampleProducts = products.map(el=>({...el,user: adminId}))
     await Product.insertMany(sampleProducts)
     console.log('upload success'.bgGreen)
 } catch (e){
     console.log(e.bgBrightRed)
 }
}

const dropData = async () =>{
    try{
        await User.deleteMany()
        await Product.deleteMany()

        console.log('delete success'.bgMagenta)
    } catch (e){
        console.log(e.bgBrightRed)
    }
}

if(process.argv[2] === "-d"){
    dropData()
}else {
    exportData()
}
