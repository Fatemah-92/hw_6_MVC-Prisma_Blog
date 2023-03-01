

import express, { Application } from "express";
import userRoute from './routes/user.route'
import postRoute from './routes/post.route'

import * as dotenv from 'dotenv';
import {connectDB} from "./config/db";

const app:Application = express();

connectDB();

dotenv.config()
const port = process.env.PORT;

app.use(express.json());
app.use('/user', userRoute)
app.use('/post', postRoute)

app.listen(port, ()=> console.log(`express started on port: ${port}`));

