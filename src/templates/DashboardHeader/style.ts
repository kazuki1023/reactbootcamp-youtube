import { makeStyles } from "@material-ui/core";

// makeStyles : カスタム用のCSSを生成してくれる、@material-uiの機能
export default makeStyles({
  between: {
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
  },
  flex: {
    display: "flex",
  },

  // profileIconを追加
  profileIcon: {
    padding: 0,
    width: 44,
    height: 44,
    marginLeft: 10,
  },
});