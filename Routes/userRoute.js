const express = require("express")

const {getUser,createUser,updateUser,deleteUser} = require("../Controllers/userControllers")

const route = express.Router();

route.get('/',getUser);
route.post('/',createUser);
route.put('/',updateUser);
route.delete('/',deleteUser);

module.exports = route;