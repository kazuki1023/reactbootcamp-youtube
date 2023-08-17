import { Dialog, DialogTitle, DialogContent, Divider} from "@material-ui/core";

export const Upload = () => {
  return (
    <Dialog fullWidth={true} maxWidth="md" open={true}>
      {/* タイトル用コンポーネント */}
      <DialogTitle>動画のアップロード</DialogTitle>

      {/* 横線コンポーネント */}
      <Divider />

      {/* コンテント用コンポーネント */}
      <DialogContent>ダイアログのコンテンツを作成</DialogContent>
    </Dialog>
  );
};