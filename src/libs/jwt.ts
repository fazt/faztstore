import jwt from "jsonwebtoken";

export const generateAccessToken = (payload: any) => {
  return jwt.sign(payload, "replace this later", { expiresIn: "1h" });
};
