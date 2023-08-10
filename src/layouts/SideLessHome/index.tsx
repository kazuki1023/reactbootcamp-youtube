import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../../templates/DashboardHeader";

export const SideLessHomeLayout = () => {
  return (
    <div>
      <DashboardHeader />
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
};