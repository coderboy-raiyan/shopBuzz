import { TUserStatus, TUserStatusEnum } from './user.interface';

const UserStatus: TUserStatus = {
    blocked: 'blocked',
    suspended: 'suspended',
    active: 'active',
    pending: 'pending',
};
const UserStatusEnum: TUserStatusEnum = ['blocked', 'suspended', 'active', 'pending'];

export const UserUtils = {
    UserStatus,
    UserStatusEnum,
};
