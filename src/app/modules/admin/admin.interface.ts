import { Types } from 'mongoose';

export type TAdmin = {
    email: string;
    user: Types.ObjectId | string;
    phone: string;
    address: string;
    profileImg: string;
};
