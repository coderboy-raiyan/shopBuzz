import { Types } from 'mongoose';
import { UserUtils } from './user.utils';

export type TUserStatus = {
    blocked: 'blocked';
    suspended: 'suspended';
    active: 'active';
    pending: 'pending';
};

export type TUserStatusEnum = (keyof TUserStatus)[];

export type TUser = {
    email: string;
    password: string;
    isVerified: boolean;
    status: keyof typeof UserUtils.UserStatus;
    role: Types.ObjectId | string;
    isDeleted: boolean;
};
