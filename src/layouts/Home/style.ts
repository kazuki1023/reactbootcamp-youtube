import { makeStyles } from "@material-ui/core";

// 使いまわせるように、`Header`コンポーネントの'height'を定数化
const APP_BAR = 64;
const SIDEBAR_WIDTH = 240;

export default makeStyles({
  flex: {
    display: "flex",
  },
  // サイドバーの上部にAPP_BAR分のpaddingを表示
  sidebar: {
    paddingTop: APP_BAR,
    width: SIDEBAR_WIDTH,
  },
  // メインコンポーネントの上部にAPP_BAR分のpaddingを表示
  main: {
    paddingTop: APP_BAR + 30,
    flexGrow: 1,
  },
});