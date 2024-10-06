import { z } from 'zod';

export const loginUserSchema = z.object({
    email: z
        .string({ required_error: 'Email is required' })
        .email({ message: 'Email must be a valid email' }),
    password: z.string({ required_error: 'Password is required' })
});

export const registerUserSchema = z.object({
    firstName: z
        .string({ required_error: 'Name is required' })
        .regex(/^[a-zA-Z\s]*$/, { message: 'First name can only contain letters and spaces.' })
        .min(2, { message: 'First name must be at least 2 characters.' })
        .max(64, { message: 'First name cannot be more than 64 characters.' })
        .trim(),
    lastName: z
        .string({ required_error: 'Name is required' })
        .regex(/^[a-zA-Z\s]*$/, { message: 'Surname can only contain letters and spaces.' })
        .min(2, { message: 'Surname must be at least 2 characters.' })
        .max(64, { message: 'Surname cannot be more than 64 characters.' })
        .trim(),
    email: z
        .string({ required_error: 'Email is required' })
        .email({ message: 'Email must be a valid email.' }),
    password: z
        .string({ required_error: 'Password is required' })
        .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
            message:
                'Password must be a minimum of 8 characters and contain at least one letter, one number and one special character (@$!%*#?&).'
        }),
    passwordConfirm: z
        .string({ required_error: 'Password is required' })
        .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
            message:
                'Password must be a minimum of 8 characters and contain at least one letter, one number and one special character (@$!%*#?&).'
        })
})
.superRefine(({ password, passwordConfirm }, ctx) => {
    if (passwordConfirm != password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Your passwords do not match',
            path: ['password']
        });
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Your passwords do not match',
            path: ['passwordConfirm']
        });
    }
});