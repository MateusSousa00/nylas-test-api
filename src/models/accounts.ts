export type AccountDto = {
  id: string;
  object: string;
  account_id: string;
  name: string;
  provider: 'eas' | 'exchange' | 'ews' | 'outlook' | 'hotmail' | 'yahoo' | 'imap' | 'gmail' | 'custom';
  organization_unit: string;
  sync_state:
    | 'downloading'
    | 'running'
    | 'partial'
    | 'invalid-credentials'
    | 'exception'
    | 'sync-error'
    | 'stopped'
    | 'initializing';
  linked_at: string;
  email_address: string;
  metadata?: object;
};

export type AddAccountMetadata = {
  client_id: string;
  id: string;
};

export type ReturnAccountOutput = {
  account_id: string;
  billing_state: string;
  email: string;
  id: string;
  metadata?: {
    your_key: string;
  };
  provider: string;
  sync_state: string;
  trial: boolean;
  authentication_type: string;
};
