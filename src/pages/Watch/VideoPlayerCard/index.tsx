// src/pages/Watch/VideoPlayerCard/index.tsx
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@material-ui/core";

import { useEffect, useState } from "react";
import useStyles from "./style";

export type VideoPlayerCardProps = {
  title: string | undefined;
  description: string | undefined;
  views: number | undefined;
  ownerName: string | undefined;
  date: Date | undefined;
  fetcher: () => Promise<string | undefined>;
};

export const VideoPlayerCard = ({
  title,
  description,
  views,
  ownerName,
  date,
  fetcher,
}: VideoPlayerCardProps) => {
  const styles = useStyles();
  const [src, setSrc] = useState<string>();
  useEffect(() => {
    // Firebas Storageから動画のダウンロードリンクを取得する
    fetcher().then(setSrc);
  });
  return (
    // stylesの適用
    <Card className={styles.transparent} elevation={0} square>
    {/*
      追加
      srcに動画のパスを指定する
    */}
    <CardMedia component="video" controls src={src} />

    <CardContent className={styles.paddingHorizontalLess}>
      <Typography component="h2" variant="h6">
        {title}
      </Typography>

      <Typography variant="body2" color="textSecondary">
        {/*
          追加
          動画の視聴回数と動画のアップロード日を表示
        */}
        {views} 回視聴 • {date ? new Date(date).toLocaleDateString() : ""}
      </Typography>
    </CardContent>

    <Divider />

    {/*
      追加
      title を投稿者の名前を表示する
    */}
    <CardHeader
      className={styles.paddingHorizontalLess}
      avatar={<Avatar />}
      title={ownerName}
      subheader="0 subscribers"
    />

    {/* 説明文エリア */}
    <CardContent className={styles.descPadding}>{description}</CardContent>
  </Card>
  );
};