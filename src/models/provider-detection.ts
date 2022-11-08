export type DetectProviderInput = {
  client_id: string;
  client_secret: string;
  email_address: string;
};

export type DetectProviderOutput = {
    auth_name: string;
    detected: boolean;
    email_address: string;
    is_imap: boolean;
    provider_name: string;
}
