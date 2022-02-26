/**
 * @file Implements mongoose schema to CRUD for
 * documents in the tuits collection
 */
import mongoose, {Schema} from "mongoose";
import Tuit from "../../models/tuits/Tuit";

/**
 * @typedef TuitSchema Represents Tuit Schema in mongoose
 * @property {string} tuit Message being broadcast
 * @property {User} postedBy user who posted the Tuit
 * @property {Date} postedOn time the Tuit was posted
 */
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel", required: true},
    postedOn: {type: Date, default: Date.now}
}, {collection: 'tuits'});
export default TuitSchema;

