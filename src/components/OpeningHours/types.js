import uuid from "uuid";

export const createOpeningHours = () => {
  return {
    days: [
      {
        day: "MON",
        toggle: false,
        id: uuid()
      },
      {
        day: "TUE",
        toggle: false,
        id: uuid()
      },
      {
        day: "WED",
        toggle: false,
        id: uuid()
      },
      {
        day: "THU",
        toggle: false,
        id: uuid()
      },
      {
        day: "FRI",
        toggle: false,
        id: uuid()
      },
      {
        day: "SAT",
        toggle: false,
        id: uuid()
      },
      {
        day: "SUN",
        toggle: false,
        id: uuid()
      }
    ],
    from: "",
    to: "",
    id: uuid()
  };
};
