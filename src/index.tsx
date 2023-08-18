import React from "react";
import ReactDOM from "react-dom";
// BrowserRouterをインポート
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./Route";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

import GlobalStyle from "./GlobalStyle";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { RecoilRoot } from "recoil";
import { AuthStateListener } from "./providers/AuthStateListener";

// GraphQl APIのエンドポイントを指定する
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_END_POINT_ORIGIN,
});

// GraphQLのリクエストりくえすとお送信する際に付与するRequest Headersなどをここで指定する
// 本来であれば認証情報などをここで取得し、トークンをHeadersに付与する。
const authLink = setContext(async () => {
  return {
    headers: {
      // 本来であれば、シークレットキーを直接Request Headersに乗せてリクエストを行うことはご法度です。
      // 今回は例外的に手っ取り早くApolloを使うために直接指定しています。
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET_KEY,
    },
  };
});

// Apollo Clientのインスタンスをここで作成している。
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),

  // Apollo Clientには強力なキャッシュ機能が搭載されています。
  // Apollo Clientを使う理由にこのキャッシュ機能のために使うと言っても過言ではありません。
  cache: new InMemoryCache(),
});



// Material-UIの「テーマ」を作成する。
// Material-UIをカスタマイズする際には、createThemeの引数にカスタマイズ項目を渡す。
const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          {/*
            ユーザーの認証情報を読む込み
          */}
          <AuthStateListener>
            <BrowserRouter>
              <CssBaseline />
              {/* <GlobalStyle /> */}
              <RootRouter />
            </BrowserRouter>
          </AuthStateListener>
        </ApolloProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);