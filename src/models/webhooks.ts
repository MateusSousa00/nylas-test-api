export type WebhookDto = {
  id: string;
  application_id: string;
  callback_url: string;
  state: string;
  triggers: string[]; //An array containing a set of triggers, describing the notifications this webhook should receive.
  version: string;
};

//TODO
