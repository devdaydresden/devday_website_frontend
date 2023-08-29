export interface APISpeakers {
    count: number;
    next: null | string;
    previous: null | string;
    results: Speaker[];
  }

export interface Speaker {
    code: string;
    name: string;
    biography: string;
    submissions: string[];
    avatar: string;
    email?: string;
    availabilities: Availability[];
    answers?: Answer[];
  }
  
  export interface Availability {
    id: number;
    start: string;
    end: string;
    allDay: boolean;
  }
  
  export interface Answer {
    question: string;
    answer: string;
  }