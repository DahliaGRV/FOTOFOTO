const sequelize = require("../config/connection")
const {User} = require("../models")

const users = [
    {
        username:"Lucasss",
        password:"password"
    },
    {
        username:"realjoe",
        password:"password1"
    },
    {
        username:"yi",
        password:"Password1"
    }
]
const addUser = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
            
        });
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

addUser()