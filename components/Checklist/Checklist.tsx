// pages/index.tsx
import React from "react";
import { Grid, Box } from "@mui/material";
import TaskTable from "../TaskTable/TaskTable";

const HomePage: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Box
                    display="flex"
                    justifyContent="center"
                    height="100%"
                >
                    <TaskTable />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box
                    display="flex"
                    justifyContent="center"
                    height="100%"
                >
                </Box>
            </Grid>
        </Grid>
    );
};

export default HomePage;
