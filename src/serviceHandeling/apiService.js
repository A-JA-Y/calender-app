export const fetchEvents = async () => {
  return [
    { id: 1, title: "Event 1", date: "2023-10-01" },
    { id: 2, title: "Event 2", date: "2023-10-02" },
  ];
};

export const addEvent = async (event) => {
  return { id: 3, ...event };
};

export const editEvent = async (event) => {
  return event;
};
