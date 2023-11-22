// TimelineEvent.js
import React from 'react';

const TimelineEvent = ({ title, date, description }) => (
  <div className="timeline-event">
    <h3>{title}</h3>
    <p className="event-date">{date}</p>
    <p>{description}</p>
  </div>
);

export default TimelineEvent;
