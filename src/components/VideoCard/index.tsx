// src/components/VideoCard/index.tsx

import { Avatar, Card, CardHeader, CardMedia } from "@material-ui/core";
import { HeaderTitle, HeaderTitleProps } from "./HeaderTitle";
import { SubHeaderContent, SubHeaderContentProps } from "./SubHeaderContent";
import useStyles from "./style";
import { useEffect, useState } from "react";

// 追加
// 子コンポーネントの型定義を使用して、冗長な書き方を防ぐことができる
// インターセクション型による型定義
export type VideoCardProps = {
  fetcher: () => Promise<string | undefined>;
} & HeaderTitleProps &
  SubHeaderContentProps;

// propsを親から受け取る
export const VideoCard = ({
  fetcher,
  title,
  owner,
  created,
  views,
}: VideoCardProps) => {
  const styles = useStyles();

  // 追加
  // 動画のサムネイルのURLを格納する
  const [imageSrc, setImageSrc] = useState<string>();

  // 追加
  useEffect(() => {
    // 関数の実態は、`Firebase Storage`からサムネイル用のダウンロードリンクを取得する
    // ここでは、関数の内部構成を知ることなく、実行すると`Promise<string | undefined>`が返される関数であることでしか知らない
    // コンポーネントから画像取得の詳細を隠しつつも、非同期な画像の取得を実現する
    fetcher().then(setImageSrc);
  });

  return (
    <Card className={styles.root} elevation={0} square>
      <CardMedia
        className={styles.media}

        // 追加
        // 画像があればサムネイルを表示
        image={imageSrc || "/static/no-image.jpg"}
        title="Thumbnail"
      />

      {/*
        タイトルやユーザーサムネイルを表示する
      */}
      <CardHeader
        className={styles.header}
        avatar={<Avatar />}

        // 追加
        // `Card`の`HeaderTitle`には`title`を渡す
        title={<HeaderTitle title={title} />}

        // 追加
        // `Card`の`SubHeaderContent`には、`owner`、`views`、`created`を渡す
        subheader={
          <SubHeaderContent owner={owner} views={views} created={created} />
        }
      />
    </Card>
  );
};