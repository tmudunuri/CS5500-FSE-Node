/**
 * @file Controller RESTful Web service API for authentication resource
 */
import {Request, Response, Express} from "express";
import UserDao from "../daos/UserDao";

const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * @class AuthenticationController Implements RESTful Web service API for auth resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/auth/login to login
 *     </li>
 *     <li>GET /api/auth/logout to logout
 *     </li>
 *     <li>POST /api/auth/register to register a new account
 *     </li>
 *     <li>DELETE /api/auth/profile to view profile
 *     </li>
 * </ul>
 * @property {UserDao} userDao Singleton DAO implementing user CRUD operations
 * RESTful Web service API
 */
const AuthenticationController = (app: Express) => {

    const userDao: UserDao = UserDao.getInstance();

    /**
     * Logs a user into their account
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client
     */
    const login = async (req: Request, res: Response) => {
        const user = req.body;
        const username = user.username;
        const password = user.password;
        const existingUser = await userDao
            .findUserByUsername(username);
        if (!existingUser) {
            res.sendStatus(403);
            return;
        }
        const match = await bcrypt.compare(password, existingUser.password);

        if (match) {
            existingUser.password = '*****';
            // @ts-ignore
            req.session['profile'] = existingUser;
            res.json(existingUser);
        } else {
            res.sendStatus(403);
        }
    }

    /**
     * Registers a new user
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client
     */
    const register = async (req: Request, res: Response) => {
        const newUser = req.body;
        const password = newUser.password;
        const hash = await bcrypt.hash(password, saltRounds);
        newUser.password = hash;

        const existingUser = await userDao
            .findUserByUsername(req.body.username);
        if (existingUser) {
            res.sendStatus(403);
            return;
        } else {
            const insertedUser = await userDao
                .createUser(newUser);
            insertedUser.password = '';
            // @ts-ignore
            req.session['profile'] = insertedUser;
            res.json(insertedUser);
        }
    }


    /**
     * Retrieves profile of user
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client
     */
    const profile = (req: Request, res: Response) => {
        // @ts-ignore
        const profile = req.session['profile'];
        if (profile) {
            profile.password = "";
            res.json(profile);
        } else {
            res.sendStatus(403);
        }
    }


    /**
     * Logs a user out of their account
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client
     */
    const logout = (req: Request, res: Response) => {
        // @ts-ignore
        req.session.destroy();
        res.sendStatus(200);
    }

    app.post("/api/auth/login", login);
    app.post("/api/auth/register", register);
    app.post("/api/auth/profile", profile);
    app.post("/api/auth/logout", logout);
}

export default AuthenticationController;