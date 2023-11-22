// TimelinePage.jsx
import React from 'react';

const TimelineEvent = ({ time, content, speakers }) => (
  <div className="timeline-event">
    <div className="time">{time}</div>
    <div className="content">{content}</div>
    <div className="speakers">{speakers}</div>
  </div>
);

const TimelineDay = ({ day, events }) => (
  <div className="timeline-day">
    <h2>{day}</h2>
    <div className="timeline-events">
      {events.map((event) => (
        <TimelineEvent key={event.id} {...event} />
      ))}
    </div>
  </div>
);

const timelineData = {
  day1: [
    { id: 1, time: '10:00 AM', content: 'Registration and Welcome', speakers: 'Club Organizers' },
    { id: 2, time: '11:00 AM', content: 'Opening Ceremony', speakers: 'Keynote Speaker' },
    // Add more events for Day 1 as needed
  ],
  day2: [
    { id: 1, time: '09:00 AM', content: 'Coding Session Begins', speakers: 'Hackathon Participants' },
    { id: 2, time: '01:00 PM', content: 'Lunch Break', speakers: 'Food Service' },
    // Add more events for Day 2 as needed
  ],
};

const TimelinePage = () => (
  <div className="timeline-page">
    <div className="timeline-days">
      <TimelineDay day="Day 01 - 30 January" events={timelineData.day1} />
      <TimelineDay day="Day 02 - 31 January" events={timelineData.day2} />
    </div>
  </div>
);

export default TimelinePage;
