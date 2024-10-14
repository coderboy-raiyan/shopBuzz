import { model, Schema } from 'mongoose';
import { TRole } from './role.interface';
import { RoleUtils } from './role.utils';

const roleSchema = new Schema<TRole>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            enum: RoleUtils.RoleEnum,
        },
    },
    { timestamps: true }
);

const Role = model<TRole>('Role', roleSchema);

export default Role;
