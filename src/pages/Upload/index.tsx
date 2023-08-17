import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Divider,
} from "@material-ui/core";
import { UploadForm } from "./UploadForm";

// import
import { VideoSelect } from "./VideoSelector";

export const Upload = () => {
  return (
    <Dialog fullWidth={true} maxWidth="md" open={true}>
      <DialogTitle>動画のアップロード</DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={4}>
          <Grid xs item>
            <VideoSelect />
          </Grid>
          <Divider orientation="vertical" flexItem />

          {/*
            左側に
          */}
          <Grid xs item>
            {/*
              UploadFormコンポーネントを表示
            */}
            <UploadForm />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};