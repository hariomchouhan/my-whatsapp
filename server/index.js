import express from "express";
import 'dotenv/config';
import cors from 'cors';
import { Connection } from "./src/Config/DbConfig.js";
import route from "./src/routes/route.js";
import bodyParser from "body-parser";


const app = express();

app.use(cors());
app.use(express.json());

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running successfully on ${process.env.SERVER_PORT}`);
    Connection();
})