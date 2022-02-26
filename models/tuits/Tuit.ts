/**
 * @file Declares Tuit data type representing Tuits that
 * Usrs can create like, bookmark, etc
 */
import User from "../users/User";

/**
 * @typedef Tuit Represents Tuits created by  users
 * @property {string} tuit Message being broadcast
 * @property {User} postedBy user who posted the Tuit
 * @property {Date} postedOn time the Tuit was posted
 */
export default interface Tuit {
    tuit: string,
    postedBy: User,
    postedOn?: Date,
};