const router = require("express").Router();
const express = require("express");

router.get("/", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  res.render("upload");
});

module.exports = router;
