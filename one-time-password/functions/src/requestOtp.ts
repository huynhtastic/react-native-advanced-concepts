import { auth } from "firebase-admin";
import { CloudFunction } from "./types";
import { TwilioService } from "./twilio";

export const requestOtp: CloudFunction = (req, res) => {
  if (!req.body.phone) {
    res.status(422).send({ error: "You must provide a phone number!" });
    return;
  }

  const phone = String(req.body.phone).replace(/[^/d]/g, "");

  auth()
    .getUser(phone)
    .then((userRecord) => {
      const code = Math.floor(Math.random() * 8999 + 1000);

      TwilioService.messages.create({
        body: `Your code is ${code}`,
        to: phone,
        from: "+19124556861",
      });
    })
    .catch((err) => {
      res.status(422).send({ error: err });
    });
};
