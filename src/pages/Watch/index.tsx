import { Container, Grid } from "@material-ui/core";
import { VideoPlayerCard } from "./VideoPlayerCard";
import useStyles from "./style";
import { useParams } from "react-router";
import {
  useRecommendVideosQuery,
  useVideoByPkQuery,
} from "../../utils/graphql/generated";
import { VideoHorizontalCard } from "../../components/VideoHorizontalCard";
import { storage } from "../../utils/Firebase/config";
import { Link } from "react-router-dom";

const WatchContent = ({ videoId }: { videoId: string }) => {
  const styles = useStyles();
  const { data: currentVideo } = useVideoByPkQuery({
    variables: { id: videoId }
  });

  const { data: recommendVides } = useRecommendVideosQuery({
    variables: { currentVideoId: videoId }
  });

 return (
    <Container className={styles.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        {/*
          追加
          再生する動画の情報を渡す
        */}
          <VideoPlayerCard
            title={currentVideo?.videos_by_pk?.title}
            description={currentVideo?.videos_by_pk?.description}
            views={currentVideo?.videos_by_pk?.views}
            ownerName={currentVideo?.videos_by_pk?.owner?.name}
            date={currentVideo?.videos_by_pk?.created_at}
            fetcher={async () => {
              if (currentVideo?.videos_by_pk?.video_url) {
                return storage
                  .ref(currentVideo.videos_by_pk.video_url)
                  .getDownloadURL();
              }
              return undefined;
            }}
          />
        </Grid>


        {/*
          追加
          リコメンドの動画を一覧表示

        */}
        {recommendVides?.videos.map((video) => (
          <Grid item xs={4}>
            <div className={styles.cardPadding}>

              {/*
                動画プレイヤーを表示するためのリンク
              */}
              <Link
                to={`/watch/${video.id}`}
                style={{ textDecoration: "none" }}
              >

                {/*
                  カードの表示に必要なデータをpropsに渡す
                */}
                <VideoHorizontalCard
                  title={video.title}
                  views={video.views}
                  owner={video.owner?.name || ""}
                  created={video.created_at}
                  fetcher={() =>
                    storage.ref(video.thunbnail_url).getDownloadURL()
                  }
                />
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export const Watch = () => {
  const { videoId } = useParams();

  if (!videoId) {
    return null; // またはエラーメッセージやデフォルトのコンテンツを表示する
  }

  return <WatchContent videoId={videoId} />;
};