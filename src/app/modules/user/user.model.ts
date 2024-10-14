import { hash } from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import { model, Schema } from 'mongoose';
import config from '../../config';
import AppError from '../../errors/AppError';
import Role from '../role/role.model';
import { RoleUtils } from '../role/role.utils';
import { TUser } from './user.interface';
import { UserUtils } from './user.utils';

const userSchema = new Schema<TUser>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            select: false,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        role: {
            type: String,
            enum: RoleUtils.RoleEnum,
            required: true,
        },
        status: {
            type: String,
            enum: UserUtils.UserStatusEnum,
            default: 'pending',
        },
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await hash(this.password, config.bcrypt_salt_round);
    }
    if (this.isModified('role')) {
        const role = await Role.findOne({ name: this.role });
        if (!role) {
            throw new AppError(StatusCodes.NOT_FOUND, 'Role not found!');
        }
        this.role = role?.name;
    }
    next();
});

const User = model<TUser>('User', userSchema);

export default User;
