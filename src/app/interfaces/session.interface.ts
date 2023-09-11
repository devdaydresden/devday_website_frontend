export interface SessionSpeaker {
  name: string;
  code: string;
  biography: string;
}

export interface Slot {
  start: string;
  end: string;
  room: string;
  room_id: number;
}

interface Question {
  id: number;
  question: {
    en: string;
  };
  required: boolean;
  target: string;
  options: string; 
}

interface Answer {
  id: number;
  question: Question;
  answer: string;
  answer_file: any;
  submission: string;
  person: any; 
  options: any[];
}

export interface Session {
  count: number;
  next: string | null;
  previous: string | null;
  results: SessionResults[];
}

export interface SessionResults {
  code: string;
  speakers: SessionSpeaker[];
  title: string;
  submission_type: string;
  submission_type_id: number;
  state: string;
  abstract: string;
  description: string;
  duration: number;
  do_not_record: boolean;
  is_featured: boolean;
  content_locale: string;
  slot: Slot;
  answers: Answer[];
  notes: string;
  internal_notes: string;
  tags: string[];
  tag_ids: number[];
}