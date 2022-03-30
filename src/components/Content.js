import Item from "./Item";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Content({ data }) {
    console.log(data);
    const renderTable = (data) => {
        return data.map((item) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={item.index}>
                    <Item data={item} />
                </Grid>
            );
        });
    };

    return (
        <Box sx={{ paddingX: 2, marginY: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {renderTable(data)}
                </Grid>
            </Box>
        </Box>
    );
}
