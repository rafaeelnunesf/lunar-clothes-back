import { ObjectId } from "mongodb";
import db from "../db.js";

export async function postMyBag(req, res) {
  const { id, size } = req.body;
  // falta erro 401 quando usuário precisar logar e userId na collection
  // await db.collection("mybag").drop();

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
  try {
    const myBag = await db.collection("mybag").find().toArray();

    res.send(myBag);
  } catch {
    res.sendStatus(500);
  }
}
