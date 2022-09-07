import { z } from "zod";

export const SingupSchema = z.object({
  body: z.object({
    name: z.string().min(3, {
      message: "Name must be at least 3 characters long",
    }),
    lastname: z.string().min(3, {
      message: "Lastname must be at least 3 characters long",
    }),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters long",
    }),
  }),
});

export const SigninSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
});

export type SingupSchemaType = z.infer<typeof SingupSchema>["body"];
export type SigninSchemaType = z.infer<typeof SigninSchema>["body"];
