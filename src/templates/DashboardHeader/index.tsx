import { AppBar, Avatar, Grid, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Logo } from "../../components/Logo";
import { SearchBar } from "./SearchBar";
import useStyles from "./style";

export const DashboardHeader = () => {
  const styles = useStyles();

  return (
    <AppBar elevation={0} color="inherit">
      {/*
        <Toolbar>に"between"のCSSを追加
      */}
      <Toolbar className={styles.between}>
        {/*
          <IconButton>とLogoを<div>で囲み、<div>にflexを付与
        */}
        <div className={styles.flex}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>

        <SearchBar />

        {/*
          2つの<IconButton>を<div>で囲み、<div>にflexを付与
        */}
        <div className={styles.flex}>
          <IconButton>
            <VideoCallIcon />
          </IconButton>

          <IconButton className={styles.profileIcon}>
            <Avatar />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};