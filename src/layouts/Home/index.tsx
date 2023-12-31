import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../../templates/DashboardHeader";
import { Sidebar } from "../../templates/Sidebar";
import useStyles from "./style";

export const HomeLayout = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>

      <DashboardHeader />

      {/*
        Sidebarとメインコンポーネントを囲む<div>を作成し、Sidebarとメインコンポーネントを横並びにする
      */}
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};