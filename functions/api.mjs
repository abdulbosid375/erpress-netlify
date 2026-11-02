import express from "express";
import ServerlessHttp from "serverless-http";
import path from "path"
const app = express();
const __dirname = path.relative()
app.get("/", (req,res) =>{
    res.send(__dirname + "/dist/index.html");
});

export const handler = ServerlessHttp(app);