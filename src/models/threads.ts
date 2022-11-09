import { DraftDto } from './drafts';
import { LabelDto } from './labels';
import { MessageDto } from './messages';

export type ThreadsInput = {
  view: 'ids' | 'count' | 'expanded';
  limit: string;
  offset: string;
  subject: string;
  any_email: string;
  to: string;
  from: string;
  cc: string;
  bcc: string;
  in: 'name' | 'display_name' | 'id';
  unread: boolean;
  starred: boolean;
  filename: string;
  last_message_before: string;
  last_message_after: string;
  started_before: string;
  started_after: string;
  not_in: string;
  last_updated_before: string;
  last_updated_after: string;
  last_updated_timestamp: string;
};

export type ThreadDto = {
  account_id: string;
  draft_ids?: string[] | null;
  first_message_timestamp: number;
  has_attachments: boolean;
  id: string;
  labels: LabelDto[] //TODO
  last_message_received_timestamp: number | null;
  last_message_sent_timestamp: number | null;
  last_message_timestamp: number | null;
  message_ids?: string[];
  object: string;
  participants: [
    {
      email: string;
      name: string;
    },
  ];
  snippet: string;
  starred: boolean;
  subject: string;
  unread: boolean;
  version: number;
  messages?: MessageDto[];
  drafts?: DraftDto[];
  folders: string[]; //TODO
};
