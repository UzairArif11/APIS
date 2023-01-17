const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/route");
const app = express();
const port = process.env.Port || 8000;
app.use(express.json()); //required to get json data as output

app.use(studentRouter);
app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
