
import mongoose from "mongoose";

async function dbConnect(){
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("connected");
        return connect
    } catch (error) {
        console.log(error);
    }
}

export { dbConnect}