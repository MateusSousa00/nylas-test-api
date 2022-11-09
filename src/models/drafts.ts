import { FileDto } from './files';
import { FolderDto } from './folders';
import { LabelDto } from './labels';
import { EventDto } from './events';

export type DraftDto = {
  id: string;
  object: string;
  account_id: string;
  thread_id: string;
  subject: string;
  reply_to_message_id: string;
  from: [
    {
      name: string;
      email: string;
    },
  ];
  reply_to: [
    {
      name: string;
      email: string;
    },
  ];
  to: [
    {
      name: string;
      email: string;
    },
  ];
  cc: [
    {
      name: string;
      email: string;
    },
  ];
  bcc: [
    {
      name: string;
      email: string;
    },
  ];
  date: number;
  unread: boolean;
  starred: boolean;
  snippet: string;
  body: string;
  files: FileDto[];
  events: EventDto[];
  folder: FolderDto;
  labels: LabelDto[];
  version: number;
};