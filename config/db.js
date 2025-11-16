import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/batch28andbatch26")
        .then(() => console.log("Mongodb connected successfully"))
        .catch((err) => console.log(err))
}


export default connectDB