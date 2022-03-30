import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
    const handleClick = () => {
        const newWindow = window.open(
            "https://dean1665.vn/svs2021/linh-vuc-cuoc-thi/thiet-bi-ho-tro-giam-sat-truyen-dich-trong-y-te-ket-hop-phan-mem-quan-ly-du-lieu-dieu-tri-351.html",
            "_blank",
            "noopener,noreferrer"
        );
        if (newWindow) newWindow.opener = null;
    };
    return (
        <Typography variant="body2" color="text.secondary" align="center" marginBottom={3}>
            {"Copyright © "}
            <Link onClick={handleClick} color="inherit" sx={{ cursor: "pointer" }}>
                BK307
            </Link>{" "}
            {new Date().getFullYear()}
        </Typography>
    );
}
