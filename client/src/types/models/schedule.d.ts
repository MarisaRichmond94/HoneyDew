import { Day } from 'enums';

declare global {
  interface DaySchedule {
    id: string,
    isActive: boolean,
    timeInMinutes: number,
  };

  type Schedule = { [key in Day]: DaySchedule; };
};

export {};
