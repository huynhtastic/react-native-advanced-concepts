import { auth, database } from "firebase-admin";
import { CloudFunction } from "./types";

export const verifyOtp: CloudFunction = (req, res) => {
  if (!req.body.code || !req.body.phone) {
    res.status(422).send({ error: "Phone and code must be provided" });
    return;
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  const code = parseInt(req.body.code, 10);

  auth()
    .getUser(phone)
    .then(() => {
      const ref = database().ref("users/" + phone);
      ref.on("value", (snapshot) => {
        const user = snapshot.val();
        if (user.code !== code || !user.codeValid) {
          res.status(422).send({ error: "Code not valid" });
          return;
        }

        ref.update({ codeValid: false });
      });
    })
    .catch((err) => res.status(422).send(err));
};
