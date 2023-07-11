import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import EditPost from "./EditPost";

const ModalWindow = ({ open, handleClose, idPost }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Редактирование поста</DialogTitle>
            <DialogContent>
                <EditPost idPost={idPost} close={handleClose}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Закрыть</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalWindow;
