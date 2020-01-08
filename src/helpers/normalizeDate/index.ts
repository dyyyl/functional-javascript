const normalizeDate = (date: Date): number => {
  return parseInt(date.toString().split(' ')[3], 10);
};

export default normalizeDate;
