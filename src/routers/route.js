const express = require("express");
// 1: create a new router
const router = new express.Router();

// 2. we need to define the router
router.get("/uzair", (req, res) => {
  res.send("Hello whatsapp guys");
});

module.exports = router;
