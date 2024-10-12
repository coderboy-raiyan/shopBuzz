import { z } from 'zod';
import { RoleUtils } from './role.utils';

const createRoleValidations = z.object({
    body: z.object({
        name: z.enum(RoleUtils.TRoleEnum as [string, ...string[]]),
    }),
});

export const RoleValidations = {
    createRoleValidations,
};