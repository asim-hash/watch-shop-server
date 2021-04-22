export const notFound = (req,res,next) =>{
    const error = `Not found -${req.originalUrl}`
    res.status(404)
    next(error)
}
export const errorHandler = (error,req,res,next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message:error.message,
        stack:process.env.NODE_ENV ==="production" ?null:error.stack
    })
    next()
    console.log(process.env.NODE_ENV)
}
export default {notFound,errorHandler}
