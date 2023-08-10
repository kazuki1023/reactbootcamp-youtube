import { AppBar, Box, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// ロゴ画像をimport
import { Logo } from "../../components/Logo";

import useStyles from "./style";

export const DashboardHeader = () => {
  const styles = useStyles();
  return (
    <AppBar elevation={0} color="inherit">
      <Toolbar>
        {/*
          アイコン用のボタンを配置
        */}
        <IconButton>
          <MenuIcon />
        </IconButton>

        {/*
          ロゴを配置
        */}
        <div className={styles.logo}>
          <Logo />
        </div>

      </Toolbar>
    </AppBar>
  );
};