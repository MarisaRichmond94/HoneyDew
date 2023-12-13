import { Day } from 'enums';

declare global {
  interface DailyChore {
    id: string,
    choreId: string,
    userId: string,
    day: Day,
  };
};

export {};
