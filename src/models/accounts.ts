export type AccountOutput = {
    id: string;
  object: string;
  account_id: string;
  name: string;
  provider: 'eas' | 'exchange' | 'ews' | 'outlook' | 'hotmail' | 'yahoo' | 'imap' | 'gmail' | 'custom';
  organization_unit: string;
  sync_state: 'downloading'|'running'|'partial'|'invalid-credentials'|'exception'|'sync-error'|'stopped'|'initializing';
  linked_at: string;
  email_address: string;
  metadata?:{
    your_key: string;
  };
  message?: string;
  type?: string;
};

export type AddAccountMetadata = {
    client_id: string;
    id: string;
}