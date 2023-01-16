const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 4,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,

    require: true,
  },
  address: {
    type: String,
    required: true,
  },
});

//we will create a new collection
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
