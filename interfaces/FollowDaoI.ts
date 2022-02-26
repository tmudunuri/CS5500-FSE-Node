/**
 * @file Declares API for Follows related data access object methods
 */
import Follow from "../models/follows/Follow";

export default interface FollowDaoI {
    userFollowsUser(uid1: string, uid2: string): Promise<Follow>;

    userUnfollowsUser(uid1: string, uid2: string): Promise<any>;

    findAllUsersFollowedByUser(uid: string): Promise<Follow[]>;

    findAllUsersThatFollowUser(uid: string): Promise<Follow[]>;

    userLosesAllFollowers(uid: string): Promise<any>;

    userUnfollowsAllUsers(uid: string): Promise<any>;
};