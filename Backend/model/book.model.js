import mongoose from "mongoose";

const bookShema = mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    category:String,
    image:String
})

const Book = mongoose.model("Books",bookShema);

export default Book