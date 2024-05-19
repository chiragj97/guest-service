import { type Colors } from "../types/home";

const Colors = {
  ongoing: "#34C759BF",
  schedule: " #0081DFBF",
  queue: "#9747FFBF",
  onhold: " #E29C16BF",
  reopen: "#CF0072",
  escalated: "#FF0000",
  completed: "#4F9E33",
  cancelled: "#000",
};

const Status = {
  ongoing: "Ongoing",
  schedule: "Schedule",
  queue: "Queue",
  onhold: "On-Hold",
  reopen: "Re-Open",
  escalated: "Escalated",
  completed: "Completed",
  cancelled: "Cancelled",
};
const Service = () => {
  return (
    <div
      className="d-flex justify-content-between px-3"
      style={{
        fontSize: 20,
        fontWeight: 500,
        color: "#fff",
      }}
    >
      {Object.keys(Status).map((i) => (
        <div
          key={i}
          style={{
            background: Colors[i as keyof typeof Colors],
            borderRadius: 5,
            width: 150,
            height: 100,
          }}
          className="d-flex flex-column justify-content-between p-2"
        >
          <div>{Status[i as keyof typeof Colors]}</div>
          <div className="d-flex justify-content-end">
            <div>25</div>
            <div>
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.583008 14.7917L7.87467 7.50008L0.583008 0.208416L0.583008 14.7917Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
