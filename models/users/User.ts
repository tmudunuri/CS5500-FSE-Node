/**
 * @file Declares Users data type representing users that
 * create Tuits, follow other Users, etc
 */
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
import mongoose from "mongoose";

/**
 * @typedef User Represents Users of Tuiter
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
export default interface User {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    firstName?: string,
    lastName?: string,
    email: string,
    profilePhoto?: string,
    headerImage?: string,
    biography?: string,
    dateOfBirth?: Date,
    accountType?: AccountType,
    maritalStatus?: MaritalStatus,
    location?: Location,
    salary?: number
};
