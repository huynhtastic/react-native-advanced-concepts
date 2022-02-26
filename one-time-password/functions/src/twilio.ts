import twilio from "twilio";
import { twilioSecrets } from "./secrets";

// +19124556861

export const TwilioService = new twilio.Twilio(
  twilioSecrets.sid,
  twilioSecrets.authToken
);
