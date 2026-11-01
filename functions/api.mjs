import express from "express";
import ServerlessHttp from "serverless-http";

const app = express();

app.get("/", (req,res) =>{
    res.send("Welcome to my API");
});

app.get("/kino", (req, res) => {
    res.json({
        1: "olov",
        2: "sarguzasht",
        3: "mashenij",
        4: "otlar",
        5: "flash"
    });
});

export const handler = ServerlessHttp(app);