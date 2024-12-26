const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//connection to mongodb
mongoose.connect("mongodb://localhost:27017/")
.then(() => console.log("connected to db"))
.catch((err) => console.log(err));


// routes
app.use("/api/products", productRoute);

app.listen(8085 , () =>{
  console.log("server is running on port 8085");
})


app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


