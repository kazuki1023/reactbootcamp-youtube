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

import useStyles from "./style";

export const VideoPlayerCard = () => {
  const styles = useStyles();
  return (
    // stylesの適用
    <Card className={styles.transparent} elevation={0} square>

      <CardMedia
        component="video"
        controls
        src="/static/production_ID_4763824.mp4"
      />

      {/*
        stylesの適用
      */}
      <CardContent className={styles.paddingHorizontalLess}>
        <Typography component="h2" variant="h6">
          Organization Admin Settings: Dashboard overview [1/7]
        </Typography>

        <Typography variant="body2" color="textSecondary">
          10,094,526 回視聴 • 2018/08/06
        </Typography>
      </CardContent>

      <Divider />

      {/*
        stylesの適用
      */}
      <CardHeader
        className={styles.paddingHorizontalLess}
        avatar={<Avatar />}
        title="Movieclips Trailers"
        subheader="104K subscribers"
      />

      {/*
        stylesの適用
      */}
      <CardContent className={styles.descPadding}>
        Find your absolutely beautiful and serene place and listen to nature
        sounds, birds signing and relaxing water sounds with breathtaking views
        of Mount Shuksan. It’s 8-hour 4k video of discovery and peace. Download
        it for your personal use and transform your 4K TV into a source of
        relaxation and restoration.
      </CardContent>
    </Card>
  );
};