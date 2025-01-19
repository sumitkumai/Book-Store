import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';

import bookroute from './routes/book.route.js'
import userroute from './routes/user.route.js'

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

mongoose.connect(MONGO_URI,{dbName:"BookShelf"})
.then(async() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
});


// defining route
app.use('/api',bookroute)
app.use('/api',userroute)