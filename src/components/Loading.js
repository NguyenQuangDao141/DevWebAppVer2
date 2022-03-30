import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
    return (
        <Box sx={{ width: "100%", marginY: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress size={50} />
        </Box>
    );
}
