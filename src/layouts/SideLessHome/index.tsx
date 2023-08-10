import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../../templates/DashboardHeader";
import useStyles from "./styles";

export const SideLessHomeLayout = () => {
  const styles = useStyles();
  return (
    <div>
      {/*
        DashboardHeaderコンポーネントを表示する
      */}
      <DashboardHeader />
      {/*
        <Outlet />を配置した箇所に、childrenコンポーネントが展開される
        childrenコンポーネントとは、Route.tsx内でchildren>elementで指定したコンポーネントである
      */}
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};