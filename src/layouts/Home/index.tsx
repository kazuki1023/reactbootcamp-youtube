import { Outlet } from "react-router-dom";
// DashboardHeaderをimport
import { DashboardHeader } from "../../templates/DashboardHeader";

export const HomeLayout = () => {
  return (
    <div>
      {/* DashboardHeaderを配置 */}
      <DashboardHeader />
      <h1>Dashboard</h1>
      {/*
        <Outlet />を配置した箇所に、childrenコンポーネントが展開される
        childrenコンポーネントとは、Route.tsx内でchildren>elementで指定したコンポーネントである
      */}
      <Outlet />
    </div>
  );
}