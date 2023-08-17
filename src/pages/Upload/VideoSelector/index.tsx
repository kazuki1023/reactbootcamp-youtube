import { Button, CardMedia, Grid, Typography } from "@material-ui/core";
import { useState, useRef, ChangeEvent, useEffect} from "react";

// スタイルimport
import useStyles from "./style";

export const VideoSelect = () => {
  const styles = useStyles();
  const [file, setFile] = useState<File>();
  const [videoURL, setVideoURL] = useState<string>();
  const [thumbnailURLs, setThumbnailURLs] = useState<string[]>([]);

  // サムネイルを生成する関数
  const createThumbnail = (videoRefURL: string) => {
    // サムネイル生成のための準備
    // canvasタグを使って、<video>のビューを転写する
    // 詳しく知りたい方はhttps://shanabrian.com/web/javascript/canvas-image.php
    const video = document.createElement("video");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");


    // <video>の動画の読み込みが終わったら、<canvas>に<video>と同じサイズにリサイズ
    video.onloadeddata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      video.currentTime = 0;
    };

    // video.currentTime が変更されるたびに呼び出される関数(onseeked)を指定する
    // video.currentTimeの時のvideoのビュー表示を<canvas>に転写して画像を生成
    // video.currentTime が動画の最後になるまで繰り返す
    video.onseeked = () => {
      if (video.currentTime >= video.duration || !context) return;

      //  <video>のビューを<canvas>に転写
      context.drawImage(video, 0, 0);

      // 配列のstateを更新する
      // prev: 変更前のstateの値
      // [...prev,canvas.toDataURL("image/jpeg")]
      // →以前のstateを値を保ちつつ、新しい値を配列に挿入している
      // イメージとしては、array.append(value)
      // 詳しくは：https://zenn.dev/gunners6518/articles/4c06488cfa402e
      setThumbnailURLs((prev) => [...prev, canvas.toDataURL("image/jpeg")]);
      video.currentTime += Math.ceil(video.duration / 3);
    };

    // 動画の読み込み
    video.src = videoRefURL;
    video.load();
  };
  // 「ファイルを選択」したあとに、選択されたファイルを上記のfileに代入する処理
  const selectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setFile(event.currentTarget.files[0]);
    }
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.click();
  };
  useEffect(() => {
    // ファイルが空の場合は、実行しない
    if (file) {
      // URL.createObjectURLは、ファイルを引数に受け取り、<video>タグで読み込み可能なローカルURLを生成します。
      // URL.createObjectURLで生成されたURLを<video>のsrcにわたすことでファイルを動画で表示できます。
      setVideoURL(URL.createObjectURL(file));
    }


    // file変数が変更されるのを監視する
    // fileの変更を検知したら、上記を実行する
    // fileはstateで宣言された変数でなければ、変更の検知はされない。
  }, [file]);
  return (
    // スタイリング適用
    <div className={styles.root}>


      {videoURL && (
        <div className={styles.full}>
          <CardMedia component="video" src={videoURL} controls />

          {/* スタイリング適用 */}
          <Typography className={styles.textPadding}>サムネイル</Typography>

          {/* スタイリング適用 */}
          <Grid container spacing={2} className={styles.thumbnailContent}>
            {thumbnailURLs.map((url) => {
              return (
                <Grid item xs={4}>
                  <CardMedia image={url} style={{ paddingTop: "56.25%" }} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}

      <input type="file" hidden ref={inputRef} onChange={selectedFile} />

      {/* ボタンのスタイルを調整 */}
      {!videoURL && <Button  variant="contained" color="primary"  onClick={handleClick}>ファイルを選択</Button>}
    </div>
  );
};