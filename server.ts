/**
 * @file Implements the main server file that runs the app
 */
import express, {Request, Response} from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserController from './controllers/UserController';
import TuitController from "./controllers/TuitController";
import LikeController from "./controllers/LikeController";
import FollowController from "./controllers/FollowController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";

mongoose.connect('mongodb+srv://admin:' + process.env.DB_PASSWORD + '@cluster0.ayiv2.mongodb.net/tuiter?retryWrites=true&w=majority')
const app = express();
app.use(bodyParser.json())

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World!'));

const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const likesController = LikeController.getInstance(app);
const followController = FollowController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const messageController = MessageController.getInstance(app);

// create RESTful Web service API

const PORT = 4000;
app.listen(process.env.PORT || PORT);


// Export data
// mongoexport --uri mongodb+srv://admin:<password>@cluster0.aazb2.mongodb.net/tuiter --collection users --type json --out users.json
// mongoexport --uri mongodb+srv://admin:<password>@cluster0.aazb2.mongodb.net/tuiter --collection tuits --type json --out tuits.json