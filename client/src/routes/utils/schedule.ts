import { Day } from 'enums';

const toDay = (day: string): Day => {
  switch (day) {
    case 'Monday':
      return Day.Monday;
    case Day.Tuesday.toString():
      return Day.Tuesday;
    case Day.Wednesday.toString():
      return Day.Wednesday;
    case Day.Thursday.toString():
      return Day.Thursday;
    case Day.Friday.toString():
      return Day.Friday;
    case Day.Saturday.toString():
      return Day.Saturday;
    case Day.Sunday.toString():
      return Day.Sunday;
    default:
      throw new Error(`toDay recieved invalid value '${day}' for day.`);
  }
};

export {
  toDay,
};
