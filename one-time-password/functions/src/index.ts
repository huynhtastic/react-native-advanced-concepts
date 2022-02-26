import * as functions from "firebase-functions";
import { createUser as _createUser } from "./createUser";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const goodBye = functions.https.onRequest((req, res) => {
  res.send("Goodbye!");
});

export const createUser = functions.https.onRequest(_createUser);
