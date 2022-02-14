import db from "../db.js";
import jwt from "jsonwebtoken";

export default async function tokenValidationMiddleware(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");
  const keySecret = process.env.JWT_SECRET;

  try {
    jwt.verify(token, keySecret);
    const session = await db.collection("sessions").findOne({ token });
    res.locals.userId = session.userId;
  } catch {
    return res.sendStatus(401);
  }

  next();
}
