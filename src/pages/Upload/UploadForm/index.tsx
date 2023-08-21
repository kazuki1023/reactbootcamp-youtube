// src/pages/Upload/UploadForm/index.tsx

import { Button, TextField, Typography } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { useVideoUpload } from "../../../hooks/VideoUpload";
import { GlobalUser } from "../../../stores/User";
import useStyles from "./style";


// 追加
// UploadFormコンポーネントのプロップスとして、引数を型定義する
export type UploadFormProps = {
  videoFile: File | undefined;
  thumbFile: File | undefined;
};

// 追加
// 親コンポーネントから、UploadFormに渡される引数
export const UploadForm = ({ videoFile, thumbFile }: UploadFormProps) => {
  const styles = useStyles();

  // リダイレクト用関数
  const navigate = useNavigate();

  // videoをアップロードする際の、ownerIdのためのuserId
  const user = useRecoilValue(GlobalUser);

  // ユーザー入力を受け取る`ref`変数
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  // エラーを表示する用のステート
  const [errorMessage, setErrorMessage] = useState<Error>();

  // 動画をアップロードするためのHooks
  const { upload, loading, error: uploadError } = useVideoUpload();

  // 「動画をアップロード」ボタンをクリックしたら実行する関数
  const submit = () => {
    setErrorMessage(undefined);

    if (!user?.id) {
      return setErrorMessage(new Error("ログインされていません。"));
    }

    if (!videoFile || !thumbFile) {
      return setErrorMessage(new Error("ファイルを選択してください。"));
    }

    if (!titleRef.current?.value) {
      return setErrorMessage(new Error("タイトルをしてください。"));
    }

    upload({
      file: {
        video: videoFile,
        thumbnail: thumbFile,
      },
      title: titleRef.current.value,
      description: descRef.current?.value,
      ownerId: user.id,
    }).then((data) => {
      // 動画のアップロードが成功すれば、`home`URLにリダイレクト
      if (data?.id) {
        navigate("/");
      }
    });
  };

  // Hooksからのエラーを受け取り、画面表示用のエラーステートに渡す。
  useEffect(() => {
    setErrorMessage(uploadError);
  }, [uploadError]);

  return (
    <>
      <label className={styles.label}>
        <Typography variant="body2">タイトル</Typography>
        <TextField
          size="small"
          fullWidth
          variant="outlined"

          // 追加
          inputRef={titleRef}
        />
      </label>

      <label className={styles.label}>
        <Typography variant="body2">説明</Typography>
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          multiline
          rows={4}

          // 追加
          inputRef={descRef}
        />
      </label>

      {errorMessage?.message && (
        <label className={styles.label}>
          <Typography align="center" color="error">
            {errorMessage?.message}
          </Typography>
        </label>
      )}


      {
        // エラーがあれば表示
        errorMessage?.message && (
          <label className={styles.label}>
            <Typography color="error">{errorMessage.message}</Typography>
          </label>
        )
      }

      <div className={styles.butotn}>
        <Button
          variant="contained"
          color="primary"
          // 追加
          // ローディング中のボタンを無効化
          disabled={loading}

          // 追加
          // アップロードを実行
          onClick={submit}
        >
          {/* アップロード中の表示を切り替える */}
          {loading ? "アップロード中" : "動画をアップロード"}
        </Button>
      </div>
    </>
  );
};

