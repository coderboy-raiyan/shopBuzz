import { model, Schema } from 'mongoose';
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
            required: true,
        },
    },
    { timestamps: true }
);

const User = model<TUser>('User', userSchema);

export default User;
