import { https } from "firebase-functions";

export const createUser: Parameters<typeof https.onRequest>[0] = (req, res) => {
  res.send(req.body);
};
