import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { RoleControllers } from './role.controller';
import { RoleValidations } from './role.validation';

const router = Router();

router.post(
    '/',
    validateRequest(RoleValidations.createRoleValidations),
    RoleControllers.createRole
);

const RoleRoutes = router;

export default RoleRoutes;
