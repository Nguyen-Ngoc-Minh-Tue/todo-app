import { Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type Prop = {
  onAddingBtnClick: () => void;
  newTodoString: string;
  onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorInput: string;
};

export const CreateNewTodo = ({
  onAddingBtnClick,
  newTodoString,
  onNewTodoChange,
  errorInput,
}: Prop) => {
  return (
    <div>
      <div>
        <TextField
          size="small"
          value={newTodoString}
          onChange={onNewTodoChange}
        />

        <Button variant="contained" onClick={onAddingBtnClick}>
          Thêm
        </Button>
      </div>
      <div style={{ color: "red" }}>
        {errorInput}
      </div>
    </div>
  );
};
