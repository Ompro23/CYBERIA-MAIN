import mongoose from 'mongoose'

export const connectDb = async() =>{
   try {
    const {connection} = await mongoose.connect(process.env.MONGO_URL,{
        dbName : "Cyberia",
    });

    console.log("MongoDB Connected");
    console.log(connection.host);
   } catch (error) {
    console.log("Failed to Connect");
    console.log(error);
   }
}