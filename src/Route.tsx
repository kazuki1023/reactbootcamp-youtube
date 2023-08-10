import { Navigate, useRoutes} from 'react-router-dom';
import { HomeLayout } from "./layouts/Home";
import { SideLessHomeLayout } from "./layouts/SideLessHome";
import { SimpleLayout } from "./layouts/Simple";
import { Home } from "./pages/Home";

export const RootRouter = () => {
  return useRoutes([
    {
      element: <HomeLayout />,
      // childrenでは、pathに指定したURLで、使用するコンポーネントを指定する
      children: [{ path: "/", element: <Home />  }],
    },

    // Headerのみのデザインのページ
    {
      element: <SideLessHomeLayout />,
      children: [
        { path: "watch", element: <Navigate to="/" /> },
        { path: "watch/:videoId", element: <div>watch</div> }
      ],
    },
    // HeaderもSidebarもないページのデザイン
    {
      element: <SimpleLayout />,
      children: [
        { path: "login", element: <div>ログイン</div> },
        { path: "signup", element: <div>新規作成</div> },
        { path: "forget", element: <div>パスワードリセット</div> },
        { path: "404", element: <div>Not Found</div> },

        // pathに"*"を指定することで、「全て」のURLとして指定する
        // Navigateを指定することで、リダイレクト処理
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
}