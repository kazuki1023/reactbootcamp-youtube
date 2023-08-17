import { Button, TextField, Typography } from "@material-ui/core";

// スタイルimport
import useStyles from "./style";

export const UploadForm = () => {
  // スタイル生成
  const styles = useStyles();
  return (
    <>
      {/*
        スタイル適用
      */}
      <label className={styles.label}>
        <Typography variant="body2">タイトル</Typography>
        <TextField size="small" fullWidth variant="outlined" />
      </label>

      {/*
        スタイル適用
      */}
      <label className={styles.label}>
        <Typography variant="body2">説明</Typography>
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
        />
      </label>

      {/*
        スタイル適用
      */}
      <div className={styles.butotn}>
        <Button variant="contained" color="primary">
          動画をアップロード
        </Button>
      </div>
    </>
  );
};