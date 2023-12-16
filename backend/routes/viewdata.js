// viewData.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const Student = require('../models/student');
const studentSchema = new mongoose.Schema({
    Course: {
      type: String,
      // required: true,
    },
    Specialization: {
      type: String,
      // required: true,
      // unique: true,
    },
    RollNumber: {
      type: String,
      // required: true,
    },
    FullName: {
      type: String,
      // required: true,
    },
    Gender: {
      type: String,
      // required: true,
    },
    RegisteredForPlacement: {
      type: String,
      // required: true,
    },
    CompanyName: {
      type: String,
    },
    CTCOffered: {
      type: Number,
    },
    Designation: {
      type: String,
    },
    DateOfOffer: {
      type: Date,
    },
    RecuriterEmailID: {
      type: String,
    },
    Category: {
      type: String,
    },
    OfferType: {
      type: String,
    },
    ProofOfOffer: {
      type: String,
    },
    OfferLetterType: {
      type: String,
    },
    PlacedThrough: {
      type: String,
    },
    JobLocation: {
      type: String,
    },
    ProofLinkFileJob: {
      type: String,
    },
    Other: {
      type: String,
    },
    HSSpecification: {
      type: String,
    },
    OtherProofType: {
      type: String,
    },
    ProofLinkFileHS: {
      type: String,
    },
  });



// Define MongoDB Model
const Student = mongoose.model("2023",studentSchema); // Replace 'YourModelName' with the actual model name

// API endpoint to get all data
router.get('/', async (req, res) => {
  try {
    // Fetch all data from MongoDB
    const allData = await Student.find();
    console.log(allData);
    // Send the data to the frontend
    res.status(200).json(allData);
  } 
  catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
