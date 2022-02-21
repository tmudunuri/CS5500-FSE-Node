import MessageDaoI from "../interfaces/MessageDaoI";
import MessageModel from "../mongoose/messages/MessageModel";
import Message from "../models/messages/Message";

export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null;
    public static getInstance = (): MessageDao => {
        if (MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }

    private constructor() {
    }

    userMessagesUser = async (uid1: string, uid2: string, message: Message): Promise<Message> =>
        MessageModel.create({...message, to: uid2, from: uid1});

    userDeletesMessage = async (mid: string): Promise<any> =>
        MessageModel.deleteOne({_id: mid});

    findAllMessagesReceivedByUser = async (uid: string): Promise<Message[]> =>
        MessageModel
            .find({to: uid})
            .populate("message")
            .exec();

    findAllMessagesSentByUser = async (uid: string): Promise<Message[]> =>
        MessageModel
            .find({from: uid})
            .populate("message")
            .exec();

    userDeletesAllReceivedMessages = async (uid: string): Promise<any> =>
        MessageModel.deleteMany({to: uid});

    userDeletesAllSentMessages = async (uid: string): Promise<any> =>
        MessageModel.deleteMany({from: uid});
}