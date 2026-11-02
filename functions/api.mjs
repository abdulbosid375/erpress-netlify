import express from "express";
import ServerlessHttp from "serverless-http";
import path from "path";

const app = express();

app.get("/", (req, res) => {
 res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});

export const handler = ServerlessHttp(app);