"use client";
import React, { ChangeEvent, useCallback, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Service from "./services";
import Styles from "../styles/homeDash.module.css";
import { SearchIcon } from "@/components/icons/icons";
import SearchBar from "@/components/SearchBar/SearchBar";
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
  const [searchKey, setSearchKey] = useState("");
  const [isIn, setIsIn] = useState(false);

  const switchInOut = useCallback(() => setIsIn(!isIn), [isIn]);
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

              padding: "0px 24px 0px 9px",
              // border: "1px solid black",
            }}
          >
            {/* <div className="position-absolute w-100 h-100 d-flex justify-content-between align-items-center ps-3 pe-3">
              <SearchIcon />
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
            </div> */}
            <SearchBar />
          </div>

          <div
            className="d-flex p-1 me-3"
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
              onClick={switchInOut}
              style={{
                background: !isIn ? "#25215A" : "transparent",
                padding: "10px, 25px, 10px, 25px",
                borderRadius: 30,
                color: !isIn ? "#fff" : "black",
                cursor: "pointer",
              }}
            >
              Out
            </div>
            <div
              className="w-100 d-flex align-items-center justify-content-center"
              onClick={switchInOut}
              style={{
                background: isIn ? "#25215A" : "transparent",
                cursor: "pointer",
                color: isIn ? "#fff" : "black",

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
