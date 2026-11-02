import express from "express";
import ServerlessHttp from "serverless-http";
import path from "path"
const app = express();
const __dirname = path.relative()
app.get("/", (req,res) =>{
    res.send(__dirname + "/dist/index.html");
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