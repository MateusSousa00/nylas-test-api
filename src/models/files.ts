export type FileDto = {
  id: string;
  object: string;
  account_id: string;
  filename: string;
  size: number;
  content_type: string;
  message_ids: string[];
  content_id: string;
};
