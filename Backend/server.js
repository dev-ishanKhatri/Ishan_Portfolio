import "dotenv/config";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import contactLimite from "./Middleware/rateLimit.js";
import contactRoute from "./Routes/contactRoute.js";

dotenv.config();

const app=express();

app.use(express.json({ limit: "10kb" }));
app.use(cors());

app.use("/api/contact",contactLimite, contactRoute);

const Port = process.env.PORT;
app.listen(Port, () => {
    console.log("Server is running on port number 5000");
});