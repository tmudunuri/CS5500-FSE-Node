import express, {Request, Response} from 'express';
import UserController from './controllers/UserController';
import TuitController from "./controllers/TuitController";
import UserDao from './daos/UserDao';
import TuitDao from './daos/TuitDao';
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

mongoose.connect('mongodb+srv://admin:' + process.env.DB_PASSWORD + '@cluster0.aazb2.mongodb.net/tuiter?retryWrites=true&w=majority')
app.use(bodyParser.json())

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World!'));

const userDao = new UserDao();
const tuitDao = new TuitDao();
const userController = new UserController(app, userDao);
const tuitController = new TuitController(app, tuitDao);

const PORT = 4000;
app.listen(process.env.PORT || PORT);