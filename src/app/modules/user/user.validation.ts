import { z } from 'zod';

// Minimum 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character
export const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
);
export const phoneValidation = new RegExp(/^(?:\+8801|01)[3-9]\d{8}$/);

const createAdminValidationSchema = z.object({
    body: z.object({
        email: z.string().email(),
        user: z.string(),
        phone: z
            .string()
            .max(11, { message: 'Password must have at least 11 characters' })
            .regex(phoneValidation, {
                message: 'Please enter a valid phone number',
            }),
        address: z.string(),
        password: z
            .string()
            .min(1, { message: 'Must have at least 1 character' })
            .regex(passwordValidation, {
                message: 'Your password is not valid',
            }),
    }),
});

export const UserValidations = {
    createAdminValidationSchema,
};
