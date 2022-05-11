const { result } = require('lodash');
const { Model, DataTypes } = require('sequelize');
const router = require('..');
const sequelize = require('../../config/connection');

class Image extends Model{}

router.get("/images", (req, res) => {
    User.findAll({})
      .then((dbImages) => {
        console.log(dbImages);
        res.json(dbImages);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.post("/images",(req,res)=>{
      Image.create({
          where: {
              filename:result.info.secure_url
          }
      })
  });
module.exports=Image