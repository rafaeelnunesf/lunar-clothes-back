import { ObjectId } from "mongodb";
import db from "../db.js";

export async function postMyBag(req, res) {
  const { userId } = res.locals;
  const { id, size } = req.body;

  try {
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (product && product.size.includes(size)) {
      await db.collection("mybag").insertOne({
        ...product,
        size,
        productId: new ObjectId(id),
        _id: new ObjectId(),
        userId: userId,
      });

      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch {
    res.sendStatus(500);
  }
}

export async function getMyBag(req, res) {
  const { userId } = res.locals;

  try {
    const myBag = await db
      .collection("mybag")
      .find({ userId: userId })
      .toArray();

    res.send(myBag);
  } catch {
    res.sendStatus(500);
  }
}

export async function deleteMyBag(req, res) {
  const { id } = req.params;
  const { userId } = res.locals;

  try {
    const productInBag = await db
      .collection("mybag")
      .findOne({ _id: new ObjectId(id), userId });

    if (productInBag) {
      await db.collection("mybag").deleteOne({ _id: new ObjectId(id) });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
export async function deleteManyMyBag(req, res) {
  const { userId } = res.locals;
  try {
    const userBag = await db.collection("mybag").find({ userId }).toArray();

    if (userBag.length !== 0) {
      await db.collection("mybag").deleteMany({ userId });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(201);
  }
}
