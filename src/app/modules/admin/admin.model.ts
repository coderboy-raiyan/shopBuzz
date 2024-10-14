import { model, Schema } from 'mongoose';
import { TAdmin } from './admin.interface';

const adminSchema = new Schema<TAdmin>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        profileImg: {
            type: String,
            default: 'https://i.ibb.co.com/vBXnBwf/protection.png',
        },
    },
    { timestamps: true }
);

const Admin = model<TAdmin>('Admin', adminSchema);

export default Admin;
