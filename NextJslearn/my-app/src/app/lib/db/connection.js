 
import mongoose  from 'mongoose'
 
let connection=mongoose.connect(process.env.MONGO_URI).then(()=>{
console.log('db connect');
}).catch((e)=>{
    console.log('db  not connect')
})
export default connection;