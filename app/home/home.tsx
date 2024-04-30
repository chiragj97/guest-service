"use client";
import React, { ChangeEvent } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Service from "./services";
import Styles from "../styles/homeDash.module.css";
function createData(
  source: number,
  uid: string,
  date: string,
  time: string,
  location: string,
  guest_name: string,
  task: string,
  timer: string,
  agent: string,
  status: string
) {
  return {
    source,
    uid,
    date,
    time,
    location,
    guest_name,
    task,
    timer,
    agent,
    status,
  };
}

const rows = [
  createData(
    101,
    "RDGN123456789",
    "  01st Jan 2024",
    "01:45 Hrs",
    "Lobby Gent’s Washroom",
    "Anirudh Jonnalagadda",
    "WC Flush not working",
    "- 02min",
    "Anirudh Jonnalagadda",
    "Onging"
  ),
  createData(
    101,
    "RDGN123456789",
    "  01st Jan 2024",
    "01:45 Hrs",
    "Lobby Gent’s Washroom",
    "Anirudh Jonnalagadda",
    "WC Flush not working",
    "- 02min",
    "Anirudh Jonnalagadda",
    "Onging"
  ),
];

export default function BasicTable() {
  const [searchKey, setSearchKey] = React.useState("");
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchKey(value);
  };
  return (
    <div>
      <div className="top-box h-100 w-100 pb-3 pt-3">
        <div className="first-box d-flex justify-content-between">
          <div
            className="w-100 h-100 d-flex justify-content-between align-items-center"
            style={{
              padding: 2,
              maxWidth: 175,
              border: "1px solid #000",
              maxHeight: 40,
              borderRadius: "0px 50px 50px 0px",
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 400 }}>Available</div>
            <div
              className="p-3 d-flex align-items-center justify-content-center"
              style={{
                background: "#1C185B",
                fontSize: 12,
                fontWeight: 700,
                color: "#fff",
                borderRadius: "50%",
                width: 16,
                height: 16,
              }}
            >
              45
            </div>
          </div>

          <div
            className="position-relative"
            style={{
              width: 500,
              height: 40,
              borderRadius: 30,

              padding: "0px 24px 0px 9px",
              border: "1px solid black",
            }}
          >
            <div className="position-absolute w-100 h-100 d-flex justify-content-between align-items-center ps-3 pe-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.48 9.74C18.48 14.567 14.567 18.48 9.74 18.48C4.91303 18.48 1 14.567 1 9.74C1 4.91303 4.91303 1 9.74 1C14.567 1 18.48 4.91303 18.48 9.74Z"
                  stroke="black"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M16.0298 16.03L18.9998 19"
                  stroke="black"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="w-100 h-100">
                <input
                  onChange={onSearchChange}
                  value={searchKey}
                  style={{ outline: "none", border: "none" }}
                  className="w-100 h-100"
                  name="search"
                  placeholder="search"
                />
              </div>
              <div>
                <div>Filter</div>
                <div></div>
              </div>
            </div>
          </div>

          <div
            className="d-flex p-1 "
            style={{
              background: "#F4F4F4",
              boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              borderRadius: 30,
              width: 114,
              height: 40,
            }}
          >
            <div
              className="w-100 d-flex align-items-center justify-content-center"
              style={{
                background: "#25215A",
                padding: "10px, 25px, 10px, 25px",
                borderRadius: 30,
                color: "#fff",
              }}
            >
              Out
            </div>
            <div
              className="w-100 d-flex align-items-center justify-content-center"
              style={{
                padding: "10px, 25px, 10px, 25px",
                borderRadius: 30,
              }}
            >
              In
            </div>
          </div>
        </div>
        <div className="second-box pt-4" style={{}}>
          <div
            className=" d-flex align-items-center justify-content-between pe-1 ps-3"
            style={{
              width: 175,
              height: 40,
              border: "1px solid black",
              borderRadius: "0px 50px 50px 0px",
            }}
          >
            <div className="pe-2">Accept Ticket</div>
            <label className={Styles.switch}>
              <input type="checkbox" />
              <span className={`${Styles.slider} ${Styles.round}`}></span>
            </label>
          </div>
        </div>
      </div>
      <Service />

      <TableContainer>
        <Table
          sx={{ minWidth: 650, borderBottom: "none" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow
              sx={{
                "& th": { fontSize: 15, fontWeight: 400 },
              }}
            >
              <TableCell align="center">Source</TableCell>
              <TableCell align="center">UID</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Guest Name</TableCell>
              <TableCell align="center">Task</TableCell>
              <TableCell align="center">Timer</TableCell>
              <TableCell align="center">Agent</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.source}
                sx={{
                  "& td, & th": {
                    borderBottom: "none",
                    fontSize: 12,
                    fontWeight: 400,
                  },
                }}
              >
                <TableCell align="center" style={{ fontWeight: "bolder" }}>
                  {row.source}
                </TableCell>

                <TableCell align="center">{row.uid}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.guest_name}</TableCell>
                <TableCell align="center">{row.task}</TableCell>
                <TableCell align="center" style={{ color: "red" }}>
                  {row.timer}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "#1C185B", fontWeight: "600 !important" }}
                >
                  {row.agent}
                </TableCell>
                <TableCell align="center">
                  <div
                    className="p-2"
                    style={{
                      borderRadius: 4,
                      background: " #3E89CCBF",
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  >
                    {row.status}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
