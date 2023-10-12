import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a product name']
    },
    desc: {
        type: String,
        required: [true, 'Please enter a product description']
    },
    price: {
        type: Number,
        required: [true, 'Please enter a product price']
    },
    images: [
        {
            public_id: {
                type: String,
            },
            url: {
                type:String,
            },
        },
    ],
    category: {
        type: String,
        required: [true, 'Please select category'],
        enum: {
            values: [
                "Electronics",
                "Cameras",
                "Laptop",
                "Accessories",
                "TV",
                "Headphones",
                "Others"
            ],
            message: "Please select carefully"
        },
    },
    seller: {
        type: String,
        required: [true, "Please enter product seller"],
    },
    stock: {
        type: String,
        required: [true, "Please enter product stock"]
    },
    ratings: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    },
],
createdAt: {
    type: Date,
    default: Date.now
},
});

export default mongoose.models.Product ||
mongoose.model("Product", productSchema)