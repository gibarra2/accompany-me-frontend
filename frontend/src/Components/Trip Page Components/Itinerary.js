import React from 'react';
import DayTimeline from './Timeline';
// import { format } from 'date-fns';

const Itinerary = ({ startDate, endDate, places }) => {
  // const getDates = (start, end) => {
  //   let date = start;
  //   const dates = [];

  //   while (date <= end) {
  //     dates.push(format(date, 'MM-dd-yy'));
  //     date.setDate(date.getDate() + 1);
  //   }

  //   console.log(dates);
  // };

  // getDates(new Date(startDate), new Date(endDate));
  if ((places === undefined) | (places === {})) {
    return <></>;
  }

  return (
    <>
      {/* {makeTimeLines()} */}
      <DayTimeline places={places} />
    </>
  );
};

export default Itinerary;
