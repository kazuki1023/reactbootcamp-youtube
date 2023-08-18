import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Logo } from "../../components/Logo";
import { SearchBar } from "./SearchBar";
import useStyles from "./style";

import { useUserByIdQuery } from "../../utils/graphql/generated";
import { useEffect } from "react";

export const DashboardHeader = () => {
  const styles = useStyles();

  const { data, error } = useUserByIdQuery({
    variables: { id: "testid" },
  });

  useEffect(() => {
    console.log(data);
    console.log(error);
  }, [data]);

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
          {/*
            データが取得されたら、`data`内に`Schema`と同じ名前のオブジェクトの中にデータが格納されます。
            データがないときは表示されません。
          */}
          <IconButton>
            <Typography>{data?.users_by_pk?.name}</Typography>
          </IconButton>
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