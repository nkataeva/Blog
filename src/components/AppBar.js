import React from "react";
import { IconButton, AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@mui/icons-material";

const AppBar = () => {
    const navigate = useNavigate();
    return (
        <MuiAppBar component='nav'>
            <Toolbar>
                <Typography variant="h5" component='main' sx={{ flexGrow: 1}}>
                    Blog
                </Typography>
                <Typography variant="p" component='main' sx={{ flexGrow: 1, cursor: 'pointer'}}
                onClick={() => navigate('/posts')}>
                    Все посты
                </Typography>
                <Typography variant="p" component='main' sx={{ flexGrow: 1, cursor: 'pointer'}}
                onClick={() => navigate('/create')}>
                    Написать пост
                </Typography>
                <IconButton size='large' color="inherit" onClick={() => navigate('/')}>
                    <LogoutOutlined/>
                </IconButton>
            </Toolbar>
        </MuiAppBar>
    )
}

export default AppBar;