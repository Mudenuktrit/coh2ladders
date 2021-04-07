const getYesterdayDateTimestamp = (): number => {
  const date = new Date();
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() - 1) / 1000;
};

const convertDateToDayTimestamp = (dateInput: string | Date) => {
  const date = new Date(dateInput);
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) / 1000;
};

const convertDateToMonthTimestamp = (dateInput: string | Date) => {
  const date = new Date(dateInput);
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1) / 1000;
};

const convertDateToStartOfMonth = (dateInput: string | Date) => {
  const date = new Date(dateInput);
  // This is very weird we need month, not UTC month which can cause skip cause of time zones
  return new Date(Date.UTC(date.getUTCFullYear(), date.getMonth(), 1));
};

const getStartOfTheWeek = (dateInput: string | Date | number) => {
  const date = new Date(dateInput);
  const diff = date.getUTCDate() - date.getUTCDay() + (date.getUTCDay() === 0 ? -6 : 1);
  return new Date(date.setUTCDate(diff));
};

const getPreviousWeekTimeStamp = () => {
  const date = getStartOfTheWeek(new Date());
  const previousWeek = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() - 2);
  return convertDateToDayTimestamp(getStartOfTheWeek(previousWeek));
};

export {
  getYesterdayDateTimestamp,
  convertDateToDayTimestamp,
  convertDateToMonthTimestamp,
  getStartOfTheWeek,
  convertDateToStartOfMonth,
  getPreviousWeekTimeStamp,
};
