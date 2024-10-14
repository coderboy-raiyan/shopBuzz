import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserControllers } from './user.controller';
import { UserValidations } from './user.validation';

const router = Router();

router.post(
    '/create-admin',
    validateRequest(UserValidations.createAdminValidationSchema),
    UserControllers.createAdmin
);

const UserRoutes = router;
export default UserRoutes;
