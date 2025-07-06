const userModel = require("../Model/userModel");

const getUser = async (req, res) => {
  try {
    const user = await userModel.find();

    if (!user) {
      return res.status(404).json({ message: "Cannot get Users not found" });
    }

    if (user) {
      return res.status(200).json({ message: "Users found", user: user });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  try {
    if (!email && !name) {
      return res.status(400).json({ message: "enter all fields" });
    }

    const findedUser = await userModel.findByIdAndUpdate(
      id,
      { name, email },
      { new: true, runValidators: true }
    );

    if (!findedUser) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res
        .status(500)
        .json({ message: "User updated", user: findedUser });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createUser = async (req, res) => {
	try{
		const { name, email } = req.body;

  if (!name && !email) {
    return res.status(400).json({ message: "enter all fields" });
  }
  const user = new userModel({ name, email });

  await user.save();

  return res.status(200).json({ message: "User Created", user: user });
	}catch(e){
    res.status(500).json({ error: e.message });

	}
};

const deleteUser = async (req, res) => {
	try{
		const { id } = req.params;
  const user = await userModel.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({ message: "Cannot get Users not found" });
  }

  return res.status(500).json({ message: "user Deleted" });
	}catch(e){
    res.status(500).json({ error: e.message });
		
	}
  
};

module.exports = { updateUser, createUser, deleteUser, getUser };
