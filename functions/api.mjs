import express from "express";
import ServerlessHttp from "serverless-http";

const app = express();

app.get("/", (req,res) =>{
    res.send("Welcome to my API");
});

app.get("/about", (req, res) => {
    res.json({
        name: "Ali",
        age: "15",
        hobby: {
            1: "music",
            2: "coding",
            3: "gaming"
        }
    });
});

export const handler = ServerlessHttp(app);