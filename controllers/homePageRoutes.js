const router = require('express').Router();
const express = require('express');

router.get('/', (req, res) => {
    res.render("homepage")
   });

   module.exports = router;