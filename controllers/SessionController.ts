/**
 * @file Controller RESTful Web service API for session resource
 */
import {Request, Response, Express} from "express";

/**
 * @class SessionController Implements RESTful Web service API for session resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /api/session/set/:name/:value to set session value
 *     </li>
 *     <li>GET /api/session/get/:name to get session name
 *     </li>
 *     <li>POST /api/session/get to get all session
 *     </li>
 *     <li>DELETE /api/session/reset to reset a session
 *     </li>
 * </ul>
 * RESTful Web service API
 */
const SessionController = (app: Express) => {
    const setSession = (req: Request, res: Response) => {
        var name = req.params['name'];
        var value = req.params['value'];
        // @ts-ignore
        req.session[name] = value;
        res.send(req.session);
    }

    /**
     * Get session
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client
     */
    const getSession = (req: Request, res: Response) => {
        var name = req.params['name'];
        // @ts-ignore
        var value = req.session[name];
        res.send(value);
    }

    /**
     * Get all session
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client
     */
    const getSessionAll = (req: Request, res: Response) => {
        // @ts-ignore
        res.send(req.session);
    }

    /**
     * Reset a session
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client
     */
    const resetSession = (req: Request, res: Response) => {
        // @ts-ignore
        req.session.destroy();
        res.send(200);
    }

    app.get('/api/session/set/:name/:value',
        setSession);
    app.get('/api/session/get/:name',
        getSession);
    app.get('/api/session/get',
        getSessionAll);
    app.get('/api/session/reset',
        resetSession);
}

export default SessionController;