import { ObjectId } from "mongodb";
import db from "../db.js";
export async function getProducts(req, res) {
  const { userId } = res.locals;

  try {
    const products = await db.collection("products").find().toArray();

    if (products) {
      res.send(products);
    } else res.sendStatus(401);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getSizes(req, res) {
  const { id } = req.params;

  try {
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (product) {
      res.send(product.size);
    } else {
      res.sendStatus(404);
    }
  } catch {
    res.sendStatus(500);
  }
}
