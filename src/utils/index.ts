import moment from "moment";

export const handleGetDate = (date: Date) => {
  const formattedDate = moment(date).format("MMMM DD, YYYY");
  return formattedDate;
};
