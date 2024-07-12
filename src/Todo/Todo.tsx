import { Button } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";

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
  return (
    <div style={{ display: "flex" }}>
      <div onClick={() => updateIsCompleted(todoId)}>
        {isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
      </div>
      <div>
        <DeleteIcon onClick={() => onDeleteBtnClick(todoId)} />
      </div>
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
        endIcon={
          <Icon
            todoId={todoId}
            isCompleted={isCompleted}
            updateIsCompleted={updateIsCompleted}
            onDeleteBtnClick={onDeleteBtnClick}
          />
        }
      >
        <span style={{ textDecoration: isCompleted ? "line-through" : "" }}>
          {name}
        </span>
      </Button>
    </div>
  );
}
