import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Ivan Ivanov',
        email:'Ivan@gmail.com',
        password:bcrypt.hashSync('123',10),
        isAdmin:true
    },
    {
        name:'Petya Ivanov',
        email:'Ivn@gmail.com',
        password:bcrypt.hashSync('123',10)
    },
    {
        name:'Masha Ivanov',
        email:'Iva@gmail.com',
        password:bcrypt.hashSync('123',10)
    }
]
export default users
