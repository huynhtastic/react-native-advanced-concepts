import { https } from "firebase-functions";

export type CloudFunction = Parameters<typeof https.onRequest>[0];
