const express = require("express");
const app = express();
const PORT = process.env.PORT || 8902;
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(require("./routes/html"));
app.use(require("./routes/api"))

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://trae1357:root@cluster1.llylo.mongodb.net/workout"|| "mongodb://localhost/workout");
app.listen(PORT, function(){
    console.log("App is listeing on port ", PORT )
});