const express = require("express")
const app = express();

app.get('/',(req,res)=>{
	res.send("Vanakam da mapla")
})

app.listen(2605,()=>{
	console.log("http://localhost:2605");
})