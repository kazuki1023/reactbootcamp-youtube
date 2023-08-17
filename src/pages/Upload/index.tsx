// src/pages/Upload/index.tsx

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Divider,
} from "@material-ui/core";
import { UploadForm } from "./UploadForm";
import { VideoSelect } from "./VideoSelector";

// import
import useStyles from "./style";

export const Upload = () => {

  // スタイル生成
  const styles = useStyles();
  return (
    <Dialog fullWidth={true} maxWidth="md" open={true}>
      <DialogTitle>動画のアップロード</DialogTitle>
      <Divider />

      <DialogContent className={styles.body}>
        <Grid container spacing={4}>
          <Grid xs item>
            <VideoSelect />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid xs item>
            <UploadForm />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

