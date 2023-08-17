import { Outlet } from "react-router-dom";
// スタイルimport
import useStyles from "./style";

export const SimpleLayout = () => {
  // スタイル生成
  const styles = useStyles();
  return (
    // スタイル適用
    <div className={styles.root}>
      <Outlet />
    </div>
  );
};