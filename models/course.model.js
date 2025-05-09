const mongoose = require('mongoose');



const course = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "title is required"]
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    image: {
        type: String,
    },
    startDate: {
        type: Date, //"YYYY-MM-DD"
    },
    endDate: {
        type: Date, //"YYYY-MM-DD"
    },
    price: {
        type: Number,
        required: [true, "must have a price"]
    },
    createdAt: Number,
    updatedAt: Number,

} , {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

const courseModel = mongoose.model('courses',course);
module.exports = courseModel