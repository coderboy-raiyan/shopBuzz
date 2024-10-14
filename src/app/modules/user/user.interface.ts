import { RoleUtils } from '../role/role.utils';
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
    _id: string;
    password: string;
    isVerified: boolean;
    status: keyof typeof UserUtils.UserStatus;
    role: keyof typeof RoleUtils.Role;
    isDeleted: boolean;
};
