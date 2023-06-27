const mongoose = require('mongoose')

const connectDb = async () => {
    mongoose.set('strictQuery', true)
    const res = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true
    }, (err) => {
        if(err) throw err;
        console.log('mongodb connected successfully')
    })
    return res;
}

module.exports = connectDb