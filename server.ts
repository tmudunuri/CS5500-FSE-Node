import express, {Request, Response} from 'express';
import UserController from './controllers/UserController';
import TuitController from "./controllers/TuitController";
import TuitDao from './daos/TuitDao';
import mongoose from "mongoose";
import bodyParser from "body-parser";


mongoose.connect('mongodb+srv://admin:' + process.env.DB_PASSWORD + '@cluster0.ayiv2.mongodb.net/tuiter?retryWrites=true&w=majority')
const app = express();
app.use(bodyParser.json())

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World!'));

const tuitDao = new TuitDao();
const userController = UserController.getInstance(app);
const tuitController = new TuitController(app, tuitDao);

// create RESTful Web service API

const PORT = 4000;
app.listen(process.env.PORT || PORT);


// Export data
// mongoexport --uri mongodb+srv://admin:<password>@cluster0.aazb2.mongodb.net/tuiter --collection users --type json --out users.json
// mongoexport --uri mongodb+srv://admin:<password>@cluster0.aazb2.mongodb.net/tuiter --collection tuits --type json --out tuits.json