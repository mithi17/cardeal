const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    brand: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
    },
    carName: {
      type: String,
      required: true,
    },
    profileImage: [
      {
        image: {
          type: String,
          required: true,
          validate: {
            validator: (value) => /^(http|https):\/\/[^ "]+$/.test(value),
            message: 'Please provide a valid image URL.',
          },
        },
      },
    ],
    model: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    speed: {
      type: String,
      required: true,
    },
    gps: {
      type: String,
      required: true,
    },
    seatType: {
      type: String,
      required: true,
    },
    automatic: {
      type: String,
      required: true,
      enum: ['Automatic', 'Manual'], // Ensures valid values
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt & updatedAt fields
);

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
