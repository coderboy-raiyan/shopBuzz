import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { TRole } from './role.interface';
import Role from './role.model';

const createRoleInToDB = async (payload: TRole) => {
    const isRoleExists = await Role.findOne({ name: payload?.name });
    if (isRoleExists) {
        throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, `${payload?.name} already exists!`);
    }

    const role = await Role.create({ name: payload?.name });
    return role;
};

export const RoleServices = {
    createRoleInToDB,
};
