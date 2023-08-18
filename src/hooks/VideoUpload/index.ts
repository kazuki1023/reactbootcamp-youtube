// src/hooks/VideoUpload/index.ts

import { useEffect, useState } from "react";
import { storage } from "../../utils/Firebase/config";
import { v4 as uuidv4 } from "uuid";

// 追加
import { useInsertVideoMutation } from "../../utils/graphql/generated";
import { useRecoilValue } from "recoil";
import { GlobalUser } from "../../stores/User";

type UploadProps = {
  file: {
    thumbnail: File;
    video: File;
  };
  title: string;
  description?: string;
};

export const useVideoUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  // 動画のメタデータを保存するGraphQLMutation
  const [mutation, { error: apolloError }] = useInsertVideoMutation();

  // `video`の`ownerId`のために、userのidを取得する
  const user = useRecoilValue(GlobalUser);


  const uploadStorage = (id: string, file: File, path: string) => {
    const exe = file.name.split(".").pop();
    return storage.ref(`${path}/${id}.${exe}`).put(file);
  };

  const upload = async ({ file, title, description, ownerId }: UploadProps) => {
    // 追加
    // ユーザーが読み込まれていない、未ログインであれば処理を中断する
    if (!user?.id) {
      return;
    }

    setLoading(true);
    const thumbId = uuidv4();

    // 動画のIDを生成する
    const videoId = uuidv4();

    try {
      const videoUploadTask = await uploadStorage(
        videoName,
        file.video,
        "videos"
      );

      const thumbnailUploadTask = await uploadStorage(
        thumbName,
        file.thumbnail,
        "thumbnails"
      );

      // 追加
      // 動画のメタデータを保存する
      const res = await mutation({
        variables: {
          id: videoId,
          title,
          description,
          video_url: videoUploadTask.ref.fullPath,
          thumbnail_url: thumbnailUploadTask.ref.fullPath,
          owner_id: ownerId,
        },
      });

      // 追加
      // 全ての処理が終わったら、動画のメタデータを返す
      return res.data?.insert_videos_one;

    } catch (error) {
      console.error(error);
      setError(new Error("エラーが発生しました。最初からやり直してください。"));
    } finally {
      setLoading(false);
    }
  };

  // 追加
  // Apollo Clientのエラーをキャッチする
  useEffect(() => {
    if (apolloError) {
      console.error(apolloError);
      setError(new Error("エラーが発生しました。最初からやり直してください。"));
    }
  }, [apolloError]);

  return {
    upload,
    loading,
    error,
  };
};