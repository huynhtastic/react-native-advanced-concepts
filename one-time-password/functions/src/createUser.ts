import { https } from "firebase-functions";
import { auth } from "firebase-admin";

export const createUser: Parameters<typeof https.onRequest>[0] = (req, res) => {
  // Verify provided phone
  if (!req.body.phone) {
    res.status(422).send({ error: "Bad Input" });
    return;
  }

  // Sanitize dashes and parents
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  // Create user w/ phone
  auth()
    .createUser({ uid: phone })
    .then((user) => res.send(user))
    .catch((err) => res.status(422).send({ error: err }));

  return;
  // Respond with account made
};
