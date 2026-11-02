import express from "express";
import ServerlessHttp from "serverless-http";
import path from "path"
const app = express();
const __dirname = path.resolve();
app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html")
});

export const handler = ServerlessHttp(app);