const getUser = (req, res) => {
  res.send("this is getUSer");
};

const updateUser = (req, res) => {
  res.send("thid update USer");
};

const createUser = (req, res) => {
  res.send("thish iis create USer");
};

const deleteUser = (req,res)=>{
	res.send("this is delete user")
}

module.exports = {updateUser,createUser,deleteUser,getUser}