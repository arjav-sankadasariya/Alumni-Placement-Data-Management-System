const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

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
  
// userSchema.methods.generateAuthToken = function(){
//     const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"});
//     return token;
// }

const Student = mongoose.model("Student", studentSchema);

// const validate = (data) => {
//     const schema = joi.object({
//         firstName: joi.string().required().label("First Name"),
//         lastName: joi.string().required().label("Last Name"),
//         email: joi.string().required().email().label("Email"),
//         password: passwordComplexity().required().label("Password")
//     });
//     return schema.validate(data);
// }

module.exports = Student;


