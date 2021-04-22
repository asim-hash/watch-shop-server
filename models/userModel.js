import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
},{timestamps:true})

userSchema.methods.matchPassword = (async function (password){
    console.log(password , this.password)
    return bcrypt.compare(password, this.password)
})

const User = mongoose.model('users',userSchema)
export default User


