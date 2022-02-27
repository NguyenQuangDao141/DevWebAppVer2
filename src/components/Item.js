import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SpeedIcon from "@mui/icons-material/Speed";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import TimelapseIcon from "@mui/icons-material/Timelapse";

export default function Item({ data }) {
    return (
        <Card
            sx={
                !data.stt
                    ? { minWidth: 275, backgroundColor: "rgba(255, 99, 132, 0.7)" }
                    : { minWidth: 275, backgroundColor: "rgba(75, 192, 192, 0.7)" }
            }
        >
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 1 }}>
                    <SingleBedIcon sx={{ fontSize: 30, marginRight: 2 }} />
                    <Typography variant="h5" component="div" sx={{ fontWeight: 500 }}>
                        {data.bedId}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 1 }}>
                    <PersonOutlineIcon sx={{ fontSize: 30, marginRight: 2 }} />
                    <Typography variant="h6" component="div" color="text.secondary">
                        {data.name}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 1 }}>
                    <SpeedIcon sx={{ fontSize: 30, marginRight: 2 }} />
                    <Typography variant="h6" component="div" color="text.secondary">
                        {data.velo} giọt/phút
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 1 }}>
                    <AppSettingsAltIcon sx={{ fontSize: 30, marginRight: 2 }} />
                    <Typography variant="h6" component="div" color="text.secondary">
                        {data.calibVelo} giọt/phút
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <TimelapseIcon sx={{ fontSize: 30, marginRight: 2 }} />
                    <Typography variant="h6" component="div" color="text.secondary">
                        {data.time} phút
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
