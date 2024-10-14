import { Router } from 'express';
import RoleRoutes from '../modules/role/role.route';
import UserRoutes from '../modules/user/user.route';

const router = Router();

const routes = [
    {
        path: '/roles',
        route: RoleRoutes,
    },
    {
        path: '/users',
        route: UserRoutes,
    },
];

routes.forEach(({ path, route }) => {
    router.use(path, route);
});

export default router;
