import { Box, Button, TextField } from "@mui/material";
import { FC, ChangeEvent, useState } from "react";
import { z } from "zod";

const User = z.object({
  name: z.string().min(1),
});
type User2 = z.infer<typeof User>;
/**
 * z.objectでオブジェクトのスキーマを定義
 * z.infer<typeof User>でUserの型を取得
 */

const MUIBox: FC = () => {
  const [user, setUser] = useState<User2>();
  const [error, setError] = useState<boolean>();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ name: e.target.value });
  };

  const submitHandler = () => {
    const parseResult = User.safeParse(user);
    if (!parseResult.success) {
      setError(true);
      console.log("error");
    } else {
      setError(false);
      console.log("success");
    }
  };

  return (
    <Box textAlign={"center"} margin={"20px 0"}>
      <TextField
        autoComplete="off"
        label="名前"
        variant="outlined"
        required
        onChange={inputHandler}
        helperText={error ? "1文字以上入力してください" : ""}
        error={error}
      />
      <Box>
        <Button onClick={submitHandler}>提出</Button>
      </Box>
    </Box>
  );
};

export default MUIBox;

/**
 * required: 必須項目かの設定 (trueなら*が表示される)
 *
 */
