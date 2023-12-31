## 作業開始時
```
nvm use 16
```

で使うnodeのバージョンを指定する。

## [第１回まとめ](https://github.com/Hiro-mackay/react-bootcamp/tree/bootcamp-1)
- index.tsxが表示される
    - そこにimportして、呼び出してあげればいい。
- 動的に変更される！
    - 変更内容がすぐに確認できる。

## [第2回まとめ](https://github.com/Hiro-mackay/react-bootcamp/tree/bootcamp-2)
- component
    - 一つの部品
        -ex) layout/header/sidebar/footer/main
        - これらを切り出して使うことができるようになる
            - 注)子の場合、layoutは、それぞれのcomponentsをまとめあげて、デザインを表示するcomponent
    - その実態
        - 関数
        - 関数内でhtml要素をreturnすれば良い。
            - このhtml要素==jsx

- state
    - 変数
    ```
    // reactのライブラリから、useStateをimport
    import { useState } from 'react';

    // 初期値を0としたstateを宣言
    // const state = 0 のイメージ
    const [state, setState] = useState(0);

    // 値を変更する場合
    // state の値を 1 に変更
    setState(1)

    ```

    - useState(0)で初期値が0であることを明記し、それを
    stateに代入
    - setState(1)でstateの値を変更

    - reactは、このstateが変更されたかどうかを判断して画面表示を切り替えている。
        - setState関数が変更されているかどうかを呼び出す関数

        - setStateでstateを変更しなくちゃ、画面表示は更新されない。
        - useStateはただ初期値を定義するだけ。
        - その後のstateの変更はsetState

- componentsの設計
    - エントリーポイント
        - プログラムあるいはソースコードが実行される開始点を指す
        - reactではindex.tsx
    - [デザイン](https://www.figma.com/file/xWjQFqQLjDZttAbUhps2EJ/?node-id=0%3A1)
    - ### ファイルごとの役割
    - compontents
        - ロジックを記述しない
            - fetch,非同期処理ダメ
        - データは親コンポーネントから受け取る。
    - layouts
        - 全体でのレイアウトを共通化する
        - デザインを記述する
    - pages
        - ページごとにレイアウトを変更する
            - /loginというルーティングに対し、loginにひつようなcomponent、ロジックを呼び出す。
        - データは自分で取得する
    - templates
        - データを受け取って、表示するだけのcomponent
            - ロジックを持ったcomponent→templates
            - ロジックを持たないcomponent→components
                →ロゴとか
            - 特定のページでロジックを持つcomponent→pages

<!-- 20230804ここまで、次はフォルダ作成から -->

- header
    - 複数で使われる、ロジックを持つcomponent
        →templatesファイルの中で作成する



## 動画アップロード画面の作成(2023/08/17)
- useref
    - react特有
    - なんらかの値を代入することができるようになる
    - 代入されたものは、currentというプロパティに格納、.currentで参照できる
    - useRef で作成した関数を"ref"にわたすことで、その HTML 要素に直接アクセスできるようになります。
- tyoescriptの？記法
```
const handleClick = () => {
  inputRef.current?.click();
};
```
- ?記法を用いることで、clickが「あったら呼び出す」、「なかったら呼び出さない」という処理ができる
- これを使うことで、inputRef.currentがnullの場合、エラーが発生しない。

- 20230817終了
[次回はここから](https://github.com/Hiro-mackay/react-bootcamp/tree/bootcamp-3#apollo-client)
[firebase](https://console.firebase.google.com/u/1/project/reactbootcamp-f2155/overview)
[hasura](https://cloud.hasura.io/project/9c279459-49d8-4316-ad80-606f35f97862/integrations)

## [第4回](https://github.com/Hiro-mackay/react-bootcamp/tree/bootcamp-4/document)
- useEffect
    - 第二引数の値が変わったら、第一引数の関数を実行する
    - 第二引数がない場合、初回のみ実行される
- カスタムhook
    - 接頭辞にuseをつける
    - そうすると勝手にreactがカスタムhookと認識してくれる

