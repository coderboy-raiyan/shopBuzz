import { TRoleEnum, TRoleType } from './role.interface';

const Role: TRoleType = {
    admin: 'admin',
    superAdmin: 'superAdmin',
    seller: 'seller',
    customer: 'customer',
};

const RoleEnum: TRoleEnum = ['admin', 'customer', 'seller', 'superAdmin'];

export const RoleUtils = {
    Role,
    RoleEnum,
};
