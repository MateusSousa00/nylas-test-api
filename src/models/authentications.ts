import { AccountDto } from './accounts';

export type AuthenticateUserInput = {
  client_id: string;
  redirect_uri: string;
  response_type: 'code' | 'token';
  scopes: string;
  login_hint: string;
  state: string;
  provider: 'iCloud' | 'gmail' | 'office365' | 'exchange' | 'IMAP';
  redirect_on_error: boolean;
};

export type AuthenticateUserOutput = {
  code: string;
};

export type SendAuthorizationHostedInput = {
  client_id: string;
  grant_type: string;
  client_secret: string;
  code: string;
};

export type SendAuthorizationHostedOutput = {
  access_token: string;
  account_id: string;
  email_address: string;
  provider: 'eas' | 'exchange' | 'ews' | 'outlook' | 'hotmail' | 'yahoo' | 'imap' | 'gmail' | 'custom';
};

export type SendAuthorizationNativeInput = {
  client_id: string;
  name: string;
  email_address: string;
  provider: 'eas' | 'exchange' | 'ews' | 'outlook' | 'hotmail' | 'yahoo' | 'imap' | 'gmail' | 'custom';
  settings: SettingsAuthorizationType;
  scopes: string;
};

export type SettingsAuthorizationType = {
  eas_server?: {
    eas_server_host: string;
    username: string;
    password: string;
  };
  exchange?: {
    microsoft_client_id: string;
    microsoft_client_secret: string;
    microsoft_refresh_token: string;
    redirect_uri: string;
    service_account: boolean;
  };
  googleWorkspaceServiceAccounts?: {
    type: string;
    project_id: string;
    private_key_id: string;
    private_key: string;
    client_email: string;
    client_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
    client_x509_cert_url: string;
  };
  googleAccounts?: {
    google_client_id: string;
    google_client_secret: string;
    google_refresh_token: string;
  };
  knownProviders?: {
    password: string;
  };
  microsoftExchange?: {
    username: string;
    password: string;
    exchange_server_host: string;
  };
  microsoftExchangeActiveSync?: {
    password: string;
    eas_server_host: string;
    username: string;
  };
  microsoftEWSAuthenticationWithOAuth: {
    microsoft_client_id: string;
    microsoft_client_secret: string;
    microsoft_refresh_token: string;
    redirect_uri: string;
    service_account: boolean;
  };
  authenticateExchangePassword: {
    username: string;
    password: string;
    service_account: boolean;
  };
  microsoft365: {
    microsoft_client_id: string;
    microsoft_client_secret: string;
    microsoft_refresh_token: string;
    redirect_uri: string;
  };
  outlookAccounts: {
    username: string;
    password: string;
    exchange_server_host: string;
  };
  unknownIMAPProvider: {
    imap_host: string;
    imap_port: number;
    imap_username: string;
    imap_password: string;
    smtp_host: string;
    smtp_port: number;
    smtp_username: string;
    smtp_password: string;
    ssl_required: boolean;
  };
  microsoftGraph: {
    microsoft_client_id: string;
    microsoft_client_secret: string;
    microsoft_refresh_token: string;
    redirect_uri: string;
  };
};

export type ExchangeTheTokenInput = {
  client_id: string;
  client_secret: string;
  code: string;
};

export type ExchangeTheTokenOutput = AccountDto & {
  access_token: string;
  billing_state: 'paid' | 'canceled' | 'trial';
};
