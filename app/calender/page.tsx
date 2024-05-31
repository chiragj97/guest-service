"use client"

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import EventContentArg from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const events = [
  { title: 'Meeting', start: new Date() }
];

export default function DemoApp() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}

// a custom render function
function renderEventContent(eventInfo: EventContentArg) {
  console.log(eventInfo)
  return (
    <>
      {/* <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i> */}
    </>
  );
}
