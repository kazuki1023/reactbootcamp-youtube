import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { useEffect, useState } from "react";
import { HeaderTitle, HeaderTitleProps } from "../VideoCard/HeaderTitle";
import {
  SubHeaderContent,
  SubHeaderContentProps,
} from "../VideoCard/SubHeaderContent";
import useStyles from "./styles";

export type VideoHorizontalCardProps = {
  fetcher: () => Promise<string | undefined>;
} & HeaderTitleProps &
  SubHeaderContentProps;

// 親コンポーネントから渡されるprops
export const VideoHorizontalCard = ({
  title,
  owner,
  views,
  created,
  fetcher,
}: VideoHorizontalCardProps) => {
  const styles = useStyles();

  // 追加
  // サムネイルのダウンロードリンクのステート
  const [src, setSrc] = useState<string>();


  // 追加
  useEffect(() => {
    // サムネイルのダウンロードリンクを取得する関数
    fetcher().then(setSrc);
  });

  return (
    <Card
      className={`${styles.root} ${styles.transparent}`}
      elevation={0}
      square
    >
      <div className={styles.thumbnail}>

        {/*
          修正
          取得したサムネイルのダウンロードリンクを参照する
        */}
        <CardMedia className={styles.media} image={src} title="Thumbnail" />
      </div>

      {/*
        `Home`で作成した<HeaderTitle>と<SubHeaderContent>を流用する
      */}
      <CardHeader
        className={styles.contentPadding}

        // 追加
        // タイトルを表示
        title={<HeaderTitle title={title} />}

        // 追加
        // 投稿者名、再生回数、作成日時を表示
        subheader={
          <SubHeaderContent owner={owner} views={views} created={created} />
        }
      />
    </Card>
  );
};