import { Button, CardMedia } from "@material-ui/core";
import { useState, useRef, ChangeEvent, useEffect} from "react";

export const VideoSelect = () => {
  const [file, setFile] = useState<File>();
  const [videoURL, setVideoURL] = useState<string>();
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
    <div>
      {videoURL && <CardMedia component="video" src={videoURL} controls />}
        <input type="file" hidden ref={inputRef} onChange={selectedFile} />
        {file?.name}
        <Button variant="contained" color="primary" onClick={handleClick}>
          ファイルを選択
        </Button>
    </div>
  );
};