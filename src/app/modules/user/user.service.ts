import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import { TAdmin } from '../admin/admin.interface';
import Admin from '../admin/admin.model';
import { RoleUtils } from '../role/role.utils';
import User from './user.model';

const createAdmin = async (payload: TAdmin & { password: string }) => {
    const admin = await User.findOne({ email: payload?.email });

    if (admin) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'Admin already exists!');
    }

    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        const user = await User.create(
            [{ email: payload?.email, role: RoleUtils.Role.admin, password: payload?.password }],
            {
                session,
            }
        );

        if (!user) {
            throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create user!');
        }

        delete payload?.password;

        const createdAdmin = await Admin.create([{ ...payload, user: user[0]?._id }], {
            session,
        });

        if (!createdAdmin) {
            throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create Admin!');
        }

        await session.commitTransaction();
        await session.endSession();
        return createdAdmin[0];
    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(error);
    }
};

export const UserServices = {
    createAdmin,
};
