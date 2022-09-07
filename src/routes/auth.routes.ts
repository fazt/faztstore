import Router from "express-promise-router";
import { signinHandler, signupHandler } from "../controllers/auth.controller";
import { schemaValidator } from "../middlewares//schemaValidator";
import { SingupSchema } from "../schemas/auth.schema";

const router = Router();

router.post("/signin", signinHandler);
router.post("/signup", schemaValidator(SingupSchema), signupHandler);

export default router;
