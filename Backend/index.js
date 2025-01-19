import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';

import bookroute from './routes/book.route.js'
import userroute from './routes/user.route.js'

const app = express();
dotenv.config();

app.use(express.json());

const allowedOrigins = [
    'http://localhost:5173', // Local frontend
    'https://book-store-seven-tau-70.vercel.app/' // Production frontend (Vercel)
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true); // Allow request from allowed origins or no origin (e.g., Postman)
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));

const PORT = process.env.port || 4000;
const MONGO_URI = process.env.mongo_URI;

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