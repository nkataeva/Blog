import { Box } from "@mui/material";
import AppBar from "./AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Box sx={{maxWidth: 1200, mx: 'auto', pt: 10}}>
            <AppBar />
            <Box component='div' sx={{m: 1}}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout;