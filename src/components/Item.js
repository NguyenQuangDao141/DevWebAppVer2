import * as React from "react";
import { blue, red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SpeedIcon from "@mui/icons-material/Speed";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import LocalDrinkOutlinedIcon from "@mui/icons-material/LocalDrinkOutlined";
import BloodtypeOutlinedIcon from "@mui/icons-material/BloodtypeOutlined";

export default function Item({ data }) {
    return (
        <Card
            sx={
                data.stt && data.stt1
                    ? { minWidth: 275, backgroundColor: blue[600] }
                    : { minWidth: 275, backgroundColor: red[500] }
            }
        >
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 1 }}>
                    <SingleBedIcon sx={{ fontSize: 30, marginRight: 2, color: "#ffffff" }} />
                    <Typography variant="h5" component="div" sx={{ fontWeight: 500, color: "#ffffff" }}>
                        {data.bedId}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 0.5 }}>
                    <PersonOutlineIcon sx={{ fontSize: 30, marginRight: 2, color: "#ffffff" }} />
                    <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
                        {data.name}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 0.5 }}>
                    <LocalDrinkOutlinedIcon sx={{ fontSize: 30, marginRight: 2, color: "#ffffff" }} />
                    <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
                        {data.volu} ml
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 0.5 }}>
                    <BloodtypeOutlinedIcon sx={{ fontSize: 30, marginRight: 2, color: "#ffffff" }} />
                    <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
                        {data.solution}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 0.5 }}>
                    <SpeedIcon sx={{ fontSize: 30, marginRight: 2, color: "#ffffff" }} />
                    <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
                        {data.velo} giọt/phút
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 0.5 }}>
                    <AppSettingsAltIcon sx={{ fontSize: 30, marginRight: 2, color: "#ffffff" }} />
                    <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
                        {data.calibVelo} giọt/phút
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 0.5 }}>
                    <TimelapseIcon sx={{ fontSize: 30, marginRight: 2, color: "#ffffff" }} />
                    <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
                        {data.time} phút
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
