import { MessageDto } from './messages';

export type CategorizeMessageDto = {
  message: MessageDto;
  category: string;
  categorized_at: number;
  model_version: string;
};

export type CategorizeFeedbackDto = {
  category: string;
  message_id: string;
  feedback_at: number;
  recategorized_from: object;
  category_previous: string;
  model_version: string;
};

export type CleanConversationMessageDto = {
  message: MessageDto;
  conversation: string;
  model_version: string;
};

export type ConversationFeedbackDto = {
  model_version: string;
  message_id: string;
  feedback_at: number;
};

export type SignatureExtractionDto = {
  message: MessageDto;
  body: string;
  signature: string;
  model_version: string;
  contact: object;
};

export type SignatureExtractionFeedbackDto = {
  model_version: string;
  message_id: string;
  feedback_at: number;
};

export type OCRDto = {
  account_id: string;
  content_type: string;
  filename: string;
  id: string;
  object: string;
  ocr: string;
  size: number;
};
