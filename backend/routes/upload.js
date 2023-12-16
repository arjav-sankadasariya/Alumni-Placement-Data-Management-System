const mongoose = require('mongoose');
const multer = require('multer');
const xlsx = require('xlsx');
const router = require("express").Router();
// const bcrypt = require("bcrypt");
// const Joi = require("joi");
// var cors = require('cors');

// const app = express();
// const port = 5000;

// app.use(cors())

// MongoDB Connection
// if(mongoose.connect('mongodb+srv://arjavsank:ccdVfyazKMiFBS5m@apdms.be41l2g.mongodb.net/?retryWrites=true&w=majority', {
// if(mongoose.connect('mongodb://localhost:27017/test', {

//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   family:4
// })){
//     console.log("Database Connected ..")
// };

// Define MongoDB Schema
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

const modelName = "StudentData";

// Define MongoDB Model
var Student = mongoose.model(modelName, studentSchema);
  
  

// Multer setup for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// API endpoint for file upload
router.post('/', upload.single('excelFile'), async (req, res) => {
  
    try {

      // Define MongoDB Model
      var Student = mongoose.model(req.body.year, studentSchema);


      const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
      // console.log(workbook);
      let newStudent;
      // Assuming your Excel sheet has columns: 'name', 'rollNo', 'phoneNumber'
      for (const row of sheetData) {
        // Create a new student instance based on the schema
        newStudent = new Student({
          Course: row.Course,
          Specialization: row.Specialization,
          RollNumber: row.RollNumber,
          FullName: row.FullName,
          Gender: row.Gender,
          RegisteredForPlacement: row.RegisteredForPlacement,
          CompanyName: row.CompanyName,
          CTCOffered: row.CTCOffered,
          Designation: row.Designation,
          DateOfOffer: row.DateOfOffer,
          RecuriterEmailID: row.RecuriterEmailID,
          Category: row.Category,
          OfferType: row.OfferType,
          ProofOfOffer: row.ProofOfOffer,
          OfferLetterType: row.OfferLetterType,
          PlacedThrough: row.PlacedThrough,
          Location: row.Location,
          ProofLinkFile: row.ProofLinkFile,
          Other: row.Other,
          HSSpecification: row.HSSpecification,
          OtherProofType: row.OtherProofType,
          ProofLinkFile: row.ProofLinkFile,
        });

        //if all columns empty stop

        // Save the new student to MongoDB
        await newStudent.save();
      }
      console.log(`File uploaded successfully on database ${req.body.year}`);
      res.status(200).send('Data uploaded successfully');
      return(newStudent);
  
      
    } catch (error) {
      console.error('Error handling file upload:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;
  
  // Start the Express server
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });