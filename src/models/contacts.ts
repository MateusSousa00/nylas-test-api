export type ContactsDto = {
  id: string;
  object: string;
  account_id: string;
  given_name: string;
  middle_name: string;
  surname: string;
  suffix: string;
  nickname: string;
  birthday: string;
  company_name: string;
  job_title: string;
  manager_name: string;
  office_location: string;
  notes: string;
  picture_url: string;
  emails: EmailSubObjectDto[];
  im_addresses: InstantMessengerAddressDto[];
  physical_addresses: PhysicalAddressDto[];
  phone_numbers: PhoneNumberDto[];
  web_pages: WebPageDto[];
  groups: ContactGroupDto[];
  source: string;
};

export type EmailSubObjectDto = {
  type: string;
  email: string;
};

export type InstantMessengerAddressDto = {
  type: string;
  im_address: string;
};

export type PhysicalAddressDto = {
  format: string;
  type: string;
  street_address: string;
  city: string;
  postal_code: string;
  state: string;
  country: string;
  country_abbreviation: string;
};

export type PhoneNumberDto = {
  type: string;
  number: string;
};

export type WebPageDto = {
  type: string;
  url: string;
};

export type ContactGroupDto = {
  id: string;
  object: string;
  account_id: string;
  name: string;
  path: string;
};
