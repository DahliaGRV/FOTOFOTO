const express = require('express');
const router = express.Router();
// const path = require('path') ??

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

module.exports = router;