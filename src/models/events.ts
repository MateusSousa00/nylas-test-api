export type EventDto = {
  id: string;
  object: string;
  account_id: string;
  calendar_id: string;
  title: string;
  description: string;
  ical_uid: string;
  when: WhenDto;
  location: string;
  owner: string;
  organizer_email: string;
  organizer_name: string;
  participants: ParticipantsDto[];
  status: string;
  read_only: boolean;
  busy: boolean;
  recurrence: RecurrenceDto;
  master_event_id: string;
  original_start_time: number;
  metadata: object;
};

export type WhenDto = {
  time_obj: {
    time: number;
    timezone: string;
  };
  timespan: {
    start_time: number;
    end_tme: number;
    start_timezone: string;
    end_timezone: string;
  };
  date_obj: {
    date: Date;
  };
  datespan: {
    start_date: Date;
    end_date: Date;
  };
};

export type ParticipantsDto = {
  name: string;
  email: string;
  status: string;
  comment: string;
};

export type RecurrenceDto = {
    rrule: string[];
    timezone: string;
}