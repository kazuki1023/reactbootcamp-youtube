import { InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// カスタムスタイルをimport
import useStyles from "./style";

export const SearchBar = () => {
  // カスタムスタイルを生成
  const styles = useStyles();

  return (
    // スタイリングを指定
    <Paper className={styles.root} elevation={0} variant="outlined">
      <InputBase className={styles.input} placeholder="検索" />
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
    </Paper>
  );
};