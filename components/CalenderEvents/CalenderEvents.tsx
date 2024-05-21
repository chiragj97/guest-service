import React from "react";

interface CalendarEventProps {
  startTime: string;
  endTime: string;
  title: string;
}

const CalendarEvent: React.FC<CalendarEventProps> = ({
  startTime,
  endTime,
  title,
}) => {
  const startHour = parseInt(startTime.split(":")[0]);
  const endHour = parseInt(endTime.split(":")[0]);

  const eventStyle = {
    cursor: "pointer",
    gridRow: `${startHour + 1} / span ${endHour - startHour}`, // Calculate grid row span
  };

  return (
    <div className="calendar-event p-1" style={eventStyle}>
      <div className="fw-bold">{title}</div>
      <span className="text-muted xs">{`${startTime} - ${endTime}`}</span>
    </div>
  );
};

export default CalendarEvent;
