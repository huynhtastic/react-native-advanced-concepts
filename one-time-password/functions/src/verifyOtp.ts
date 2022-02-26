import { CloudFunction } from "./types";

export const verifyOtp: CloudFunction = (req, res) => {
  const { code, phone } = req.body;
  if (!code || !phone) {
    res.status(422).send({ error: "Phone and code must be provided" });

    return;
  }
};
