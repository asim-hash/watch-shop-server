import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async(req,res)=>{
    const products = await Product.find()
    res.json(products)
})
const getProductsById = asyncHandler(async (req,res)=>{
    const product = await Product.findById(req.params.id)
    if (product){
        console.log("jjjjj")
        res.json(product)
    }else {
        res.status(404)
        console.log("ssssss")
    }

})
export { getProducts, getProductsById }
