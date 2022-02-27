import Item from "./Item";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Content({ data }) {
    const renderTable = (data) => {
        let newData = [];
        let index = 1;
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key];
                newData.push({
                    index: index,
                    velo: element.velo,
                    time: element.time,
                    stt: element.stt,
                    name: element.name,
                    bedId: element.bedId,
                    calibVelo: element.calibVelo,
                });
                index++;
            }
        }
        return newData.map((item) => {
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
