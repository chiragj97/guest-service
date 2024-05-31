"use client"

import { useState, ChangeEvent } from 'react';
import SearchBar from '../SearchBar/SearchBar';

interface Notification {
  id: number;
  source: string;
  type: string;
  task?: string;
  description?: string;
  room: string;
  status: string;
  guestName?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    source: "AYS",
    type: "Guest Service",
    task: "WC Flush not working",
    description: "Need an urgent assistance",
    room: "101",
    status: "New",
  },
  {
    id: 2,
    source: "AYS",
    type: "Guest Service",
    task: "WC Flush not working",
    description: "Need an urgent assistance",
    room: "101",
    status: "Escalated",
  },
  {
    id: 3,
    source: "AYS",
    type: "Guest Chat",
    room: "101",
    status: "New",
    guestName: "Mr. Anirudh Jonnalagadda",
  },
  {
    id: 4,
    source: "AYS",
    type: "Guest Chat",
    room: "101",
    status: "Escalated",
    guestName: "Mr. Anirudh Jonnalagadda",
  },
];

const Notifications: React.FC = () => {
  const [filter, setFilter] = useState<string>("");

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredNotifications = notifications.filter((notification) =>
    notification.type.toLowerCase().includes(filter.toLowerCase())
  );

  const filterOptions = [
    { type: 'text' as const, label: 'Search by name' },
    { type: 'toggle' as const, label: 'Show only active' },
    { type: 'expandable' as const, label: 'Category', options: ['Category 1', 'Category 2'] },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2>Notifications</h2>
          <div className="d-flex justify-content-between align-items-center mb-3">
           <SearchBar filterOptions={filterOptions} />
          </div>
          <div className="list-group">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`list-group-item list-group-item-action ${
                  notification.status === "Escalated" ? "list-group-item-danger" : ""
                }`}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{notification.source} &bull; {notification.type}</h5>
                  <small>now</small>
                </div>
                {notification.task && (
                  <>
                    <p className="mb-1"><strong>Task:</strong> {notification.task}</p>
                    <p className="mb-1"><strong>Description:</strong> {notification.description}</p>
                  </>
                )}
                <p className="mb-1"><strong>Room:</strong> {notification.room}</p>
                {notification.guestName && (
                  <p className="mb-1"><strong>Guest Name:</strong> {notification.guestName}</p>
                )}
                <small>Status: {notification.status}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
