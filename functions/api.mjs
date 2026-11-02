import express from "express";
import ServerlessHttp from "serverless-http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

export const handler = ServerlessHttp(app);