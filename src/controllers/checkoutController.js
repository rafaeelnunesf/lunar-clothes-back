import db from "../db.js";

export async function postAddress(req, res) {
  const data = req.body;
  const { userId } = res.locals;

  try {
    const address = await db.collection("addresses").findOne({ userId });
    if (address) {
      await db
        .collection("addresses")
        .updateOne({ _id: address._id }, { $set: { ...data, userId } });
      return res.sendStatus(201);
    }
    await db.collection("addresses").insertOne({ ...data, userId });
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function getAddress(req, res) {
  const { userId } = res.locals;
  try {
    const address = await db.collection("addresses").findOne({ userId });
    if (!address) return res.sendStatus(422);
    res.status(200).send(address);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function postCreditCard(req, res) {
  const data = req.body;
  const { userId } = res.locals;

  try {
    const paymentMethod = await db
      .collection("paymentMethod")
      .findOne({ userId });
    if (paymentMethod) {
      await db.collection("paymentMethod").updateOne(
        { _id: paymentMethod._id },
        {
          $set: { ...data, userId },
        }
      );
      return res.sendStatus(201);
    }
    await db.collection("paymentMethod").insertOne({ ...data, userId });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export async function getCreditCard(req, res) {
  const { userId } = res.locals;
  try {
    const paymentMethod = await db
      .collection("paymentMethod")
      .findOne({ userId });
    if (!paymentMethod) return res.sendStatus(422);
    res.status(200).send(paymentMethod);
  } catch (error) {
    res.sendStatus(500);
  }
}
