import { hash } from 'bcryptjs';
import { model, Schema } from 'mongoose';
import config from '../../config';
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
            type: Schema.Types.ObjectId,
            ref: 'Role',
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
    next();
});

const User = model<TUser>('User', userSchema);

export default User;
