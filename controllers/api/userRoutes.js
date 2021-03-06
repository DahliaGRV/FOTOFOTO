const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../../models");

//find all
router.get("/", (req, res) => {
  User.findAll({})
    .then((dbUsers) => {
      console.log(dbUsers);
      res.json(dbUsers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
//find one
router.get("/:id", (req, res) => {
  User.findByPk(req.params.id, {})
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//Login user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    })
    if (!userData) {
      return res.status(400).json({ msg: "wrong login credentials" });
    }
    if (bcrypt.compareSync(req.body.password, userData.password)) {
      req.session.user = {
        id: userData.id,
        username: userData.username,
      };
      const cleanData = userData.get({ plain: true });
      console.log(cleanData);
      res.render('homepage', cleanData);
    }
  } catch (err){
  console.log(err);
      res.status(500).json({ msg: "an error occured", err })
  }
  })


// router.post("/login", (req, res) => {
//   User.findOne({
//     where: {
//       username: req.body.username,
//     },
//   })
//     .then((foundUser) => {
//       if (!foundUser) {
//         return res.status(400).json({ msg: "wrong login credentials" });
//       }
//       const cleanData = foundUser.get({plain:true});
//     })
//       .then((cleanData)=>{
//       if (bcrypt.compareSync(req.body.password, cleanData.password)) {
//         req.session.user = {
//           id: cleanData.id,
//           username: cleanData.username,
//         };
//         res.render("homepage",cleanData);
//       } else {
//         return res.status(400).json({ msg: "wrong login credentials" });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ msg: "an error occured", err });
//     });
//   });

//update user
router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//delete a user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delUser) => {
      res.json(delUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
