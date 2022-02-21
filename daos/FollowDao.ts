import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/follows/FollowModel";
import Follow from "../models/follows/Follow";

export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;
    public static getInstance = (): FollowDao => {
        if (FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }

    private constructor() {
    }

    userFollowsUser = async (uid1: string, uid2: string): Promise<Follow> =>
        FollowModel.create({user: uid2, followedBy: uid1});

    userUnfollowsUser = async (uid1: string, uid2: string): Promise<any> =>
        FollowModel.deleteOne({user: uid2, followedBy: uid1});

    findAllUsersThatFollowUser = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({user: uid})
            .populate("followedBy")
            .exec();

    findAllUsersFollowedByUser = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({followedBy: uid})
            .populate("user")
            .exec();

    userLosesAllFollowers = async (uid: string): Promise<any> =>
        FollowModel.deleteMany({user: uid});

    userUnfollowsAllUsers = async (uid: string): Promise<any> =>
        FollowModel.deleteMany({followedBy: uid});
}