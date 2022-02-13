import bcrypt from "bcrypt";
import db from "../db.js";
import jwt from "jsonwebtoken";

export async function postLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.sendStatus(404);
    }

    if (bcrypt.compareSync(password, user.password)) {
      delete user.password;
      const secretKey = process.env.JWT_SECRET;
      const token = jwt.sign(user, secretKey);

      const userIsConnect = await db
        .collection("sessions")
        .findOne({ userId: user._id });

      if (userIsConnect) {
        await db
          .collection("sessions")
          .updateOne({ userId: user._id }, { $set: { token } });
        return res.status(200).send(token);
      }

      await db.collection("sessions").insertOne({ token, userId: user._id });
      res.status(200).send(token);
    } else {
      res.sendStatus(401);
    }
  } catch {
    res.sendStatus(500);
  }
}

export async function postRegistration(req, res) {
  const user = req.body;

  try {
    const isDuplicate = await db
      .collection("users")
      .findOne({ email: user.email });

    if (isDuplicate) {
      return res.sendStatus(409);
    }

    const passwordHash = bcrypt.hashSync(user.password, 10);

    await db.collection("users").insertOne({ ...user, password: passwordHash });

    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}
