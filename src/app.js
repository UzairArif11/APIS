const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.Port || 8000;
app.use(express.json()); //required to get json data as output

//create a new students
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (error) {
    res.status(400).send(error);
  }
});
//read data of registered student
app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(201).send(studentsData);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get the individual student data using id

app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    res.status(201).send(studentData);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.status(200).send(error);
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete student by its id

app.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.status(200).send(error);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
