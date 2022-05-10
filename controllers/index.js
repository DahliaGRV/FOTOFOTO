const express = require('express');
const router = express.Router();


const userRoutes = require("./api/userRoutes");
router.use("/api/users",userRoutes)

const signUpRoutes = require("./signUpRoutes");
router.use("/", signUpRoutes);

const uploadRoutes = require("./uploadRoutes");
router.use("/upload", uploadRoutes);

const libraryRoutes = require("./libraryRoutes");
router.use("/library", libraryRoutes);

const homePageRoutes = require("./homePageRoutes");
router.use("/homepage", homePageRoutes);

const editorRoutes = require("./editorRoutes");
router.use("/editor", editorRoutes);

const accountPageRoutes = require("./accountPageRoutes");
router.use("/account", accountPageRoutes);

module.exports = router;