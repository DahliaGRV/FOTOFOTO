const router = require('express').Router();
const express = require('express');

router.get('/', (req, res) => {
    res.render("upload")
   });

   module.exports = router;