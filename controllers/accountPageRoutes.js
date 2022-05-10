const router = require('express').Router();
const express = require('express');

router.get('/', (req, res) => {
    res.render("account")
   });

   module.exports = router;