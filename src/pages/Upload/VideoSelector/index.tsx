import { Button, CardMedia, Grid, Typography } from "@material-ui/core";
import { useState, useRef, ChangeEvent, useEffect, Dispatch, SetStateAction} from "react";

// スタイルimport
import useStyles from "./style";

// VideoSelectコンポーネントのプロップスとして、引数を型定義する
export type VideoSelectProps = {
  videoFile: File | undefined;
  setVideoFile: Dispatch<SetStateAction<File | undefined>>;
  setThumbFile: Dispatch<SetStateAction<File | undefined>>;
};

export const VideoSelect = ({
  videoFile,
  setVideoFile,
  setThumbFile,
}: VideoSelectProps) => {
  const styles = useStyles();
  const [file, setFile] = useState<File>();
  const [videoURL, setVideoURL] = useState<string>();
  const [thumbnailURLs, setThumbnailURLs] = useState<string[]>([]);

  const [selectThumbURL, setSelectThumbURL] = useState<string>();
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
  // サムネイルを選択して、
  // 1. 参照URLを`selectThumbURL`に格納
  // 2. 参照URLから画像ファイルを生成し、`setThumbFile`でファイルを親コンポーネントに渡す
  const selectedThumb = (url: string) => {
    //  参照URLを`selectThumbURL`に格納
    setSelectThumbURL(url);

  // 参照URLから画像ファイルを生成し、`setThumbFile`でファイルを親コンポーネントに渡す
    fetch(url)
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const thumb = new File([blob], "thumb.jpeg");
        setThumbFile(thumb);
      });
  };
  // 「ファイルを選択」したあとに、選択されたファイルを上記のfileに代入する処理
  const selectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setVideoFile(event.currentTarget.files[0]);
    }
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.click();
  };
  useEffect(() => {
    if (videoFile) {
      const videoURL = URL.createObjectURL(videoFile);
      setVideoURL(videoURL);
      createThumbnail(videoURL);
    }
  }, [videoFile]);

  // 追加
  // サムネイルが生成_`されたら、最初のサムネイルを必ず選択にする
  // これで、サムネイルが選択されずに動画をアップロードすることを防ぐ
  useEffect(() => {
    if (thumbnailURLs.length && thumbnailURLs[0] !== selectThumbURL) {
      selectedThumb(thumbnailURLs[0]);
    }
  }, [thumbnailURLs]);
  return (
    <div className={styles.root}>

      {videoURL && (
        <div className={styles.full}>
          <CardMedia component="video" src={videoURL} controls />

          <Typography className={styles.textPadding}>サムネイル</Typography>
          <Grid container spacing={2} className={styles.thumbnailContent}>
            {thumbnailURLs.map((url) => {
              return (
                <Grid item xs={4}>
                  <CardMedia

                    // 追加
                    // サムネイルのスタリングを`useStyles`に移行
                    // サムネイル用のスタリングと選択中のサムネイルのスタリングを追加
                    className={`${styles.thumbnail} ${
                      url === selectThumbURL ? styles.selectedThumb : ""
                    }`}
                    image={url}

                    // 追加
                    // サムネイル画像を押したら、その画像をサムネイルとして選択する
                    onClick={() => {
                      selectedThumb(url);
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
      <input type="file" hidden ref={inputRef} onChange={selectedFile} />
      {!videoURL && (
        <Button variant="contained" color="primary" onClick={handleClick}>
          ファイルを選択
        </Button>
      )}
    </div>
  );
};