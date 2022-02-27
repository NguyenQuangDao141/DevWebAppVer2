import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SpeedIcon from "@mui/icons-material/Speed";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import TimelapseIcon from "@mui/icons-material/Timelapse";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function SearchAppBar() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                            <MenuIcon onClick={handleClickOpen} />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                        >
                            TakeCare
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Tìm kiếm ..." inputProps={{ "aria-label": "search" }} />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"xs"}>
                <DialogTitle>Chú thích</DialogTitle>
                <Divider />
                <DialogContent sx={{ paddingLeft: 8 }}>
                    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 1 }}>
                        <SingleBedIcon sx={{ fontSize: 30, marginRight: 2 }} />
                        <Typography sx={{ fontWeight: 500 }}>Giường bệnh</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 1 }}>
                        <PersonOutlineIcon sx={{ fontSize: 30, marginRight: 2 }} />
                        <Typography sx={{ fontWeight: 500 }}>Bệnh nhân</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 1 }}>
                        <SpeedIcon sx={{ fontSize: 30, marginRight: 2 }} />
                        <Typography sx={{ fontWeight: 500 }}>Tốc độ chảy</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 1 }}>
                        <AppSettingsAltIcon sx={{ fontSize: 30, marginRight: 2 }} />
                        <Typography sx={{ fontWeight: 500 }}>Tốc độ hiệu chuẩn</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 1 }}>
                        <TimelapseIcon sx={{ fontSize: 30, marginRight: 2 }} />
                        <Typography sx={{ fontWeight: 500 }}>Thời gian còn lại</Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Đã hiểu</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
