import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

export const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: "2h" });
};
