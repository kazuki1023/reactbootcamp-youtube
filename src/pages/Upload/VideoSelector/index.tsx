import { Button } from "@material-ui/core";
import { useRef } from "react";

export const VideoSelect = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.click();
  };
  return (
    <div>
        <input type="file" hidden ref={inputRef} />
        <Button variant="contained" color="primary" onClick={handleClick}>
          ファイルを選択
        </Button>
    </div>
  );
};