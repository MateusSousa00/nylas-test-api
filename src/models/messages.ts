import { EventDto } from "./events";
import { FileDto } from "./files";
import { FolderDto } from "./folders";
import { LabelDto } from "./labels";

export type MessageDto = {
  account_id: string;
  id: string;
  object: string;
  thread_id: string;
  subject: string;
  from: [
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
  reply_to: [
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
};
