import Message from "../models/messages/Message";

/**
 * @file Declares API for Messages related data access object methods
 */
export default interface MessageDaoI {
    userMessagesUser(uid1: string, uid2: string, message: Message): Promise<Message>;

    findAllMessagesSentByUser(uid: string): Promise<Message[]>;

    findAllMessagesReceivedByUser(tid: string): Promise<Message[]>;

    userDeletesMessage(mid: string): Promise<any>;

    userDeletesAllSentMessages(uid: string): Promise<any>;

    userDeletesAllReceivedMessages(uid: string): Promise<any>;
};