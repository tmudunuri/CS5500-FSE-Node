/**
 * @file Implements mongoose schema to CRUD for
 * documents in the users collection
 */
import mongoose from "mongoose";
import User from "../../models/users/User";

/**
 * @typedef UserSchema Represents User Schema in mongoose
 * @property {ObjectId} _id Unique identifier of User resources
 * @property {string} username username of User
 * @property {string} password password of User
 * @property {string} firstName firstname of User
 * @property {string} lastName lastname of User
 * @property {string} email email address of User
 * @property {string} profilePhoto link to profile photo
 * @property {string} headerImage link to header image
 * @property {User} biography bio of User
 * @property {Date} dateOfBirth date of birth of User
 * @property {AccountType} accountType account type of User
 * @property {MaritalStatus} maritalStatus marital status of User
 * @property {Location} location Location of User
 * @property {number} salary Salary of User
 */
const UserSchema = new mongoose.Schema<User>({
    username: {type: String, required: true, default: `testusername${Date.now()}`},
    password: {type: String, required: true, default: `testpassword${Date.now()}`},
    firstName: String,
    lastName: String,
    email: {type: String, required: true, default: `testemail${Date.now()}`},
    profilePhoto: String,
    headerImage: String,
    biography: String,
    dateOfBirth: Date,
    accountType: {type: String, enum: ["PERSONAL", "ACADEMIC", "PROFESSIONAL"]},
    maritalStatus: {type: String, enum: ["MARRIED", "SINGLE", "WIDOWED"]},
    location: {
        latitude: Number,
        longitude: Number
    },
    salary: {type: Number, default: 50000}
}, {collection: "users"});

export default UserSchema;