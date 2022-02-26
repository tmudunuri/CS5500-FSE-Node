/**
 * @file Declares Location data type to capture coordinates
 * of the physical location of Users.
 */

/**
 * @typedef Tuit Represents Tuits created by  users
 * @property {string} tuit Message being broadcast
 * @property {User} postedBy user who posted the Tuit
 * @property {Date} postedOn time the Tuit was posted
 */
export default interface Location {
    latitude: number,
    longitude: number
};
