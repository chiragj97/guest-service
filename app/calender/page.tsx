import CalendarEvent from "@/components/CalenderEvents/CalenderEvents";
import Layout from "@/components/Layout/Layout";
import React from "react";

interface Event {
  startTime: string;
  endTime: string;
  title: string;
}

const events: Event[] = [
  { startTime: "09:00", endTime: "11:00", title: "Meeting" },
  { startTime: "13:00", endTime: "15:00", title: "Lunch" },
  { startTime: "20:00", endTime: "22:00", title: "Dinner" },
];

const Home: React.FC = () => {
  const renderTimeSlots = () => {
    return (
      <div className="d-flex">
        {[...Array(24)].map((_, index) => (
          <div key={index} className="hour px-1">{`${index
            .toString()
            .padStart(2, "0")}:00`}</div>
        ))}
      </div>
    );
  };

  const calculateEventPosition = (startTime: string, endTime: string) => {
    const startHour = parseInt(startTime.split(":")[0], 10);
    const endHour = parseInt(endTime.split(":")[0], 10);
    return {
      gridColumnStart: startHour + 1,
      gridColumnEnd: endHour + 1,
    };
  };

  return (
    <Layout>
      <div className="container py-4">
        <h1 className="mb-4">Calendar</h1>
        {renderTimeSlots()}
        <div className="position-relative">
          {events.map((event, index) => (
            <div
              key={index}
              className="position-absolute rounded border bg-light"
              style={{
                top: "50px",
                left: `${
                  calculateEventPosition(event.startTime, event.endTime)
                    .gridColumnStart * 50
                }px`,
                width: `${
                  (parseInt(event.endTime.split(":")[0], 10) -
                    parseInt(event.startTime.split(":")[0], 10)) *
                  50
                }px`,
              }}
            >
              <CalendarEvent {...event} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
