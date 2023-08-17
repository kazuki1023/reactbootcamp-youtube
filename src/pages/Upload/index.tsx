import { Dialog, DialogTitle, DialogContent, Grid, Divider} from "@material-ui/core";

export const Upload = () => {
  return (
    <Dialog fullWidth={true} maxWidth="md" open={true}>
      {/* タイトル用コンポーネント */}
      <DialogTitle>動画のアップロード</DialogTitle>

      {/* 横線コンポーネント */}
      <Divider />

      {/* コンテント用コンポーネント */}
      <DialogContent>
        <Grid container spacing={4}>
          <Grid xs item>
            左側
          </Grid>

          {/*
            真ん中に縦線を挿入
            デザインにあるような線を入れるため
          */}
          <Divider orientation="vertical" flexItem />

          <Grid xs item>
            右側
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};