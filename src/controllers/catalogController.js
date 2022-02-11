import db from "../db.js";
export async function getProducts(req, res) {
  const { userId } = res.locals;

  try {
    const products = await db.collection("products").find().toArray();

    console.log(products);

    if (products) {
      res.send(products);
    } else res.sendStatus(401);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
