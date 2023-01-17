const express = require("express");
const Student = require("../models/students");
const router = new express.Router();

//create a new students
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (error) {
    res.status(400).send(error);
  }
});
//read data of registered student
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(201).send(studentsData);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get the individual student data using id

router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    return res.status(201).send(studentData);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.status(200).send(error);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//update the student by id

router.patch("/students/:id", async (req, res) => {
  try {
    const updateStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } //show updated data
    );
    return res.status(200).send(updateStudent);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// delete student by its id

router.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    return res.status(200).send(deleteStudent);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
