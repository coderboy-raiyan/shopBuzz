import { TRoleType } from './role.interface';

const TRole: TRoleType = {
    admin: 'admin',
    superAdmin: 'superAdmin',
    seller: 'seller',
    customer: 'customer',
};

const TRoleEnum: (keyof TRoleType)[] = ['admin', 'customer', 'seller', 'superAdmin'];

export const RoleUtils = {
    TRole,
    TRoleEnum,
};
