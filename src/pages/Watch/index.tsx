import { Container, Grid } from "@material-ui/core";
import { VideoPlayerCard } from "./VideoPlayerCard";

import useStyles from './style';

export const Watch = () => {
  const styles = useStyles();
  return (
    <Container className={styles.root}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <VideoPlayerCard />
        </Grid>
        <Grid item xs={4}>
          Video Card List
        </Grid>
      </Grid>
    </Container>
  );
};