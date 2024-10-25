const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const env =require("dotenv").config();
const app  =express();
const port =process.env.PORT || 3002;

connectDb();
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/user",require("./routes/userRoutes"));
app.use(errorHandler);

 app.listen(port,()=>{
    console.log(`server runing on port ${port}`)
 })
