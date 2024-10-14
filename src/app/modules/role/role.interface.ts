import { RoleUtils } from './role.utils';

export type TRole = {
    name: keyof typeof RoleUtils.Role;
};

export type TRoleType = {
    admin: 'admin';
    superAdmin: 'superAdmin';
    seller: 'seller';
    customer: 'customer';
};

export type TRoleEnum = (keyof TRoleType)[];
