import { Button } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";

const Icon = ({
    isCompleted,
    updateIsCompleted,
    todoId,
    onDeleteBtnClick,
}: {
    isCompleted: boolean;
    updateIsCompleted: (todoId: string) => void;
    todoId: string;
    onDeleteBtnClick: (todoId: string) => void;
}) => {
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const style = {
        position: "absolute" as "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    return (
        <div style={{ display: "flex" }}>
            <div onClick={() => updateIsCompleted(todoId)}>{isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</div>
            <div>
                <DeleteIcon onClick={() => setIsOpenDeleteModal(true)} />
            </div>
            <Modal open={isOpenDeleteModal} onClose={() => setIsOpenDeleteModal(false)}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Delete Todo
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you to delete todo ?
                    </Typography>
                    <Button onClick={() => setIsOpenDeleteModal(false)}>Cancel</Button>
                    <Button onClick={() => onDeleteBtnClick(todoId)}>Delete</Button>
                </Box>
            </Modal>
        </div>
    );
};

export default function Todo({
    name,
    isCompleted,
    updateIsCompleted,
    todoId,
    onDeleteBtnClick,
}: {
    name: string;
    isCompleted: boolean;
    updateIsCompleted: (todoId: string) => void;
    todoId: string;
    onDeleteBtnClick: (todoId: string) => void;
}) {
    return (
        <div>
            <Button
                fullWidth={true}
                style={{ justifyContent: "space-between" }}
                endIcon={<Icon todoId={todoId} isCompleted={isCompleted} updateIsCompleted={updateIsCompleted} onDeleteBtnClick={onDeleteBtnClick} />}
            >
                <span style={{ textDecoration: isCompleted ? "line-through" : "" }}>{name}</span>
            </Button>
        </div>
    );
}
