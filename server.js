const express = require("express")
const app = express();
const dotenv = require("dotenv")
const userRoute = require("./Routes/userRoute")
dotenv.config();

const PORT = process.env.PORT;

app.use('/user',userRoute)

app.listen(PORT,()=>{
	console.log(`http://localhost:${PORT}`);
})