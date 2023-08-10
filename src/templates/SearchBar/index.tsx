import { InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export const SearchBar = () => {
  return (
    // elevation={0} : 影を削除
    // variant="outlined" : 枠線を表示
    <Paper elevation={0} variant="outlined">
      {/*
        最初に表示していく文字。
        何も入力されていない検索バーに"検索"と表示されます。
      */}
      <InputBase placeholder="検索" />
      {/* 検索窓の横にある、検索アイコンを表示 */}
      <div>
        <SearchIcon />
      </div>
    </Paper>
  );
};