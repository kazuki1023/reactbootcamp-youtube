import { Container, Grid } from "@material-ui/core";
import { VideoCard } from "../../components/VideoCard";


let called = false;

export const Home = () => {
  // VideoCardコンポーネントを表示する
  return (
    <Container>
      <Grid container spacing={2}>

      {/*
        横並びにしたいコンポーネントの一つ一つを<Grid>で囲む
        こちらのGridでは、itemプロパティを指定する。
        全部を囲む<Grid container>の中にそれぞれの横並び要素の<Grid item>があるイメージ
      */}
      <Grid item xs={4}>
        <VideoCard />
      </Grid>

      <Grid item xs={4}>
        <VideoCard />
      </Grid>
      <Grid item xs={4}>
        <VideoCard />
      </Grid>
      <Grid item xs={4}>
        <VideoCard />
      </Grid>
      <Grid item xs={4}>
        <VideoCard />
      </Grid>
    </Grid>
    </Container>
  );
};