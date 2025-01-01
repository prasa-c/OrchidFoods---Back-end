import mongoose from 'mongoose';

    export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://chathu:asdf1234@cluster0.gfl0s.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}