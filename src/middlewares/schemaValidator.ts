import { Request, Response, NextFunction } from "express";
import { z, ZodSchema } from "zod";

export const schemaValidator = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(400)
          .json({ errors: error.errors.map((error) => error.message) });
      }
    }
  };
};
