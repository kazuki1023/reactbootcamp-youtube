// src/pages/Upload/index.tsx

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import { UploadForm } from "./UploadForm";
import { VideoSelect } from "./VideoSelector";
import { useRecoilValue } from "recoil";
import { AccountLoaded } from "../../stores/AccountLoaded";
import { useEffect ,useState} from "react";
import { GlobalUser } from "../../stores/User";
import { useNavigate } from "react-router-dom";

// import
import useStyles from "./style";



export const Upload = () => {

  // スタイル生成
  const styles = useStyles();

  const accountLoaded = useRecoilValue(AccountLoaded);
  const user = useRecoilValue(GlobalUser);

  const [videoFile, setVideoFile] = useState<File>();
  const [thumbFile, setThumbFile] = useState<File>();


  // react routerを使用する
  const navigate = useNavigate();

  // アカウントが読み込まれていない、未ログインであれば`/login`へリダレクト
  useEffect(() => {
    if (accountLoaded) {
      if (!user?.id) {
        navigate("/login");
      }
    }
  }, [accountLoaded, user?.id]);
  return (
    <Dialog fullWidth={true} maxWidth="md" open={true}>
      <DialogTitle>動画のアップロード</DialogTitle>
      <Divider />

      <DialogContent className={styles.body}>
        <Grid container spacing={4}>
          <Grid xs item>
              <VideoSelect
                videoFile={videoFile}
                setVideoFile={setVideoFile}
                setThumbFile={setThumbFile}
              />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid xs item>
            <UploadForm videoFile={videoFile} thumbFile={thumbFile} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

