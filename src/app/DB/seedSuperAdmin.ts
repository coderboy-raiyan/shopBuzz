import config from '../config';
import { RoleUtils } from '../modules/role/role.utils';
import User from '../modules/user/user.model';
import { UserUtils } from '../modules/user/user.utils';

const superAdmin = {
    email: config.superAdmin_email,
    password: config.superAdmin_password,
    isVerified: true,
    status: UserUtils.UserStatus.active,
    role: RoleUtils.Role.superAdmin,
};

export async function seedSuperAdmin() {
    try {
        const isSuperAdminExists = await User.findOne({ role: RoleUtils.Role.superAdmin });

        if (!isSuperAdminExists) {
            await User.create(superAdmin);
        }
    } catch (error) {
        throw new Error(error);
    }
}

export default seedSuperAdmin;
