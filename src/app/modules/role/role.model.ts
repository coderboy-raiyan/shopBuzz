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
            enum: RoleUtils.TRoleEnum,
        },
    },
    { timestamps: true }
);

const Role = model('Role', roleSchema);

export default Role;
