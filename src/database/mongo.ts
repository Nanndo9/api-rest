import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDataBase = async () => {
    mongoose
        .connect(process.env.MONGODB_URL as string, {
        })
        .then(() => console.log('Connected to MongoDB!'))
        .catch((err) => console.error('Error connecting to database:', err));
};