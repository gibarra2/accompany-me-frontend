import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import PlaceCard from './PlaceCard';

// .filter((place) => {
//   return place.time !== null;
// })

const DayTimeline = ({ places }) => {
  const TimelineItems = (places) => {
    return places.map((place) => {
      return (
        <TimelineItem>
          <TimelineOppositeContent>{place.time}</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <PlaceCard name={place.name} />
          </TimelineContent>
        </TimelineItem>
      );
    });
  };

  return (
    <>
      <Timeline position="alternate">{TimelineItems(places)}</Timeline>
    </>
  );
};

export default DayTimeline;
