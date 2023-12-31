import { Navigate, useRoutes} from 'react-router-dom';
import { HomeLayout } from "./layouts/Home";
import { SideLessHomeLayout } from "./layouts/SideLessHome";
import { SimpleLayout } from "./layouts/Simple";
import { Home } from "./pages/Home";
import { Upload } from "./pages/Upload";
import { Watch } from "./pages/Watch";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ForgetPassForm } from "./pages/ForgetPassForm";
import { Signout } from "./pages/Signout";

export const RootRouter = () => {
  return useRoutes([
    {
      element: <HomeLayout />,
      // childrenでは、pathに指定したURLで、使用するコンポーネントを指定する
      children: [
      { path: "/", element: <Home />  },
      { path: "upload", element: <Upload /> },
    ],
    },

    // Headerのみのデザインのページ
    {
      element: <SideLessHomeLayout />,
      children: [
        { path: "watch", element: <Navigate to="/" /> },
        { path: "watch/:videoId", element: <Watch /> }
      ],
    },
    // HeaderもSidebarもないページのデザイン
    {
      element: <SimpleLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "signout", element: <Signout /> },
        { path: "forget", element: <ForgetPassForm /> },
        { path: "404", element: <div>Not Found</div> },

        // pathに"*"を指定することで、「全て」のURLとして指定する
        // Navigateを指定することで、リダイレクト処理
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
}