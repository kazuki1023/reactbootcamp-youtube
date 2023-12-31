import { Typography } from "@material-ui/core";

export type SubHeaderContentProps = {
  owner: string;
  views: number;
  created: Date;
};
export const SubHeaderContent = ({
  owner,
  views,
  created,
}: SubHeaderContentProps) => {


  return (
    <>
      <Typography variant="body2">
        {
          // 追加
          // 投稿者情報
          owner
        }
      </Typography>
      <Typography variant="body2">
        {
          // 追加
          // 再生回数
          views
        } views {
          // 追加
          // 投稿時間を表示
          new Date(created).toLocaleDateString()
        }
      </Typography>
    </>
  );
};