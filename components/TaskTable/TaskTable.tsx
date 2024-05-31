"use client";

import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ThreeWayToggle from "../ThreeWayToggle/ThreeWayToggle";

interface Task {
  id: number;
  name: string;
  agentStatus: "off" | "neutral" | "on";
  inspectionStatus: "off" | "neutral" | "on";
}

const TaskTable: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "WC Cleaning", agentStatus: "on", inspectionStatus: "on" },
    { id: 2, name: "WC Cleaning", agentStatus: "on", inspectionStatus: "neutral" },
    { id: 3, name: "WC Cleaning", agentStatus: "on", inspectionStatus: "off" },
  ]);

  const handleAgentStatusChange = (id: number, newValue: "off" | "neutral" | "on") => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, agentStatus: newValue } : task
      )
    );
  };

  const handleInspectionStatusChange = (id: number, newValue: "off" | "neutral" | "on") => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, inspectionStatus: newValue } : task
      )
    );
  };

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={6}>
          {/* Empty Grid item for alignment */}
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Agent</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Inspection</Typography>
        </Grid>
      </Grid>
      {tasks.map((task) => (
        <Grid
          container
          spacing={0}
          key={task.id}
          alignItems="center"
          sx={{
            backgroundColor: "#f5f5f5", padding: 2, borderRadius: 1, margin: 1, borderLeft: "6px solid darkblue" // Add this line for the vertical border
          }}
        >
          <Grid item xs={6}>
            <Typography>{task.name}</Typography>
          </Grid>
          <Grid item xs={3}>
            <ThreeWayToggle
              value={task.agentStatus}
              onChange={(newValue) => handleAgentStatusChange(task.id, newValue)}
            />
          </Grid>
          <Grid item xs={3}>
            <ThreeWayToggle
              value={task.inspectionStatus}
              onChange={(newValue) => handleInspectionStatusChange(task.id, newValue)}
            />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default TaskTable;
