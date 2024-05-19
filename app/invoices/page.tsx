import Layout from "@/components/Layout/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function createData(
  date: string,
  source: number,
  time: string,
  location: string,
  guest_name: string,
  task: string,
  timer: string,
  agent: string,
  status: string
) {
  return {
    date,
    source,
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
    "01st Jan 2024",
    101,
    "01:45 Hrs",
    "Lobby Gent’s Washroom",
    "Anirudh Jonnalagadda",
    "WC Flush not working",
    "- 02min",
    "Anirudh Jonnalagadda",
    "Onging"
  ),
  createData(
    "01st Jan 2024",
    101,
    "01:45 Hrs",
    "Lobby Gent’s Washroom",
    "Anirudh Jonnalagadda",
    "WC Flush not working",
    "- 02min",
    "Anirudh Jonnalagadda",
    "Onging"
  ),
];

const Invoices = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center p-2">
        <input
          placeholder="Search"
          className="border rounded-pill px-3 py-2 w-50"
        />
      </div>
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
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Source</TableCell>
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
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center" style={{ fontWeight: "bolder" }}>
                  {row.source}
                </TableCell>

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
    </Layout>
  );
};

export default Invoices;
