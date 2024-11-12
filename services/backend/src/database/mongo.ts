import mongoose from "mongoose";

const connectMongo = async () => {
    const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/gameoflife";
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connection successfully');
    } catch (err) {
        console.error('Error connecting to mongoDB', err);
        process.exit(1);
    }
};

export default connectMongo;