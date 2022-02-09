import bcrypt from "bcrypt";
import db from "../db.js";

export async function postLogin(req, res) {
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
  res.send(user);
}
