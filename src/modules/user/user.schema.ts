import { z } from 'zod'

const createUserSchema = z.object({
   email: z
      .string({
         required_error: 'Email is required',
         invalid_type_error: 'Email must be a string',
      })
      .email(),
   password: z
      .string({
         required_error: 'Password is required',
         invalid_type_error: 'Password must be a string and at least 6 characters long',
      })
      .min(6),
   name: z.string().min(2),
})

export type CreateUserSchema = z.infer<typeof createUserSchema>
