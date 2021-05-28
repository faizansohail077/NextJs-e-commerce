import mongoose from 'mongoose'

function initDv() {
    if (mongoose?.connection[0]?.readyState) {
        console.log('aleradty')
        return
    }
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log('MongoDB not connected...', err));
}

export default initDv