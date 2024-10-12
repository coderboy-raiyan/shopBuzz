import { Router } from 'express';
import RoleRoutes from '../modules/role/role.route';

const router = Router();

const routes = [
    {
        path: '/roles',
        route: RoleRoutes,
    },
];

routes.forEach(({ path, route }) => {
    router.use(path, route);
});

export default router;
