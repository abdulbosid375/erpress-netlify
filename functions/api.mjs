import express from "express";
import ServerlessHttp from "serverless-http";

const app = express();

app.get("/", (req,res) =>{
    res.send("Welcome to my API");
});

let kinolar = {
    1: "olov",
    2: "sarguzasht",
    3: "mashenij",
    4: "otlar",
    5: "flash"
};

app.get("/kino/:id", (req, res) => {
    const id = req.params.id;

    res.send(kinolar[id] || "Kino topilmadi");
});

export const handler = ServerlessHttp(app);