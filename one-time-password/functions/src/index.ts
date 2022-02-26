import admin from "firebase-admin";
import * as functions from "firebase-functions";
import { createUser as _createUser } from "./createUser";
import { requestOtp as _requestOtp } from "./requestOtp";

import serviceAccount from "./service_account.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const createUser = functions.https.onRequest(_createUser);
export const requestOtp = functions.https.onRequest(_requestOtp);
