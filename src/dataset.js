// 画像のインポート
import Flower from './img/flower.jpg';
import Green from './img/green.jpg';
import Sea from './img/sea.jpg';
import Water from './img/water.jpg';
import Todo from './img/Todo.png';
// import Chatbot from './img/Chatbot.png';

const data = {
  menuData: [
    {id: 1, title: "Home", click: "", src: ""},
    {id: 2, title: "Profile", click: "profile", src: Water},
    {id: 3, title: "Skills", click: "skills", src: Sea},
    {id: 4, title: "Artifact", click: "artifact", src: Green},
    {id: 5, title: "LearningTools", click: "learning-tools", src: Flower},
  ],
  mainSkillsData: [
    {id: 1, category: "【OS】", name1: "MacBook", name2: "", comment1: "MacBookを使用しています",comment2: "", open: false},
    {id: 2, category: "【使用言語】", name1: "JavaScript", name2: "Scss", comment1: "基礎的な学習をドットインストールさんの学習サイト「JavaScript」編をすべて視聴して学びました。以下にも記述していますが、「しまぶーのIT大学」でJavaScriptの歴史的背景を学んだ上でモダンJavaScriptの学習も行いました。",comment2: "基本的に作品を作成するときには、スタイルをネスト形式で記述したり、＠Mixinなどの機能を使用することのできるSCSSをwebpackのローダーで読み混んでスタイルを切り分けて制作しています", open: false},
    {id: 3, category: "【フレームワーク】", name1: "React.js", name2: "", comment1: "コンポーネントやJSXなどのReactの基本的な学習はYouTubeを中心に学習しました。私は、React　Hooksを使用した作品が得意でCreate-React-appでの作成ではなくwebpackでの設定を行って作成することで、実際のReact開発でも柔軟な設定ができるように学習を進めてきました。このポートフォリオもReact　Hooksを使用して作成しました。",comment2: "", open: false},
    {id: 4, category: "【コードエディタ】", name1: "VS Code", name2: "", comment1: "VS Codeを使用しています。Emmet機能、拡張機能や、Gitのnpmの管理のためのターミナルコマンドの利用、「Search」機能を利用しています。",comment2: "", open: false},
    {id: 5, category: "【開発ツール】", name1: "npm", name2: "Webpack", comment1: "モダンJavaScriptを理解する際に一緒に学びました。具体的には、material-UIの使用時やバベルローダー使用時のパッケージインストールや、scriptの設定を学習しました。",comment2: "モダンJavaScriptを理解する際に一緒に学びました。具体的には、webpack.config.jsの設定（ホットリロードやBabel、プラグインの設定）を学習しました。", open: false},
    {id: 6, category: "【クラウドサービス】", name1: "Firebase", name2: "Github", comment1: "クラウドサービスの導入部分を学びました。具体的には、作成したコードをFirebaseのサービスを利用するためのinit、該当プロジェクトの作成やデプロイ、hostingサービスやFaas、Databaseの登録で使用してみました。",comment2: "ソースコード管理ツールとして学びました。具体的には、VS Codeで作成したコードをGitHubにプッシュコマンドを使用して登録したり、GitHubでのソースコード管理時の.gitignoreを使用して、Node_modulesを管理しない方法について学びました。また、Qiitaなどと並行して、公開されているGitHubのリポジトリを学習の一環で閲覧する際にも使用しました。", open: false},
    {id: 7, category: "【チャットツール】", name1: "Slack", name2: "", comment1: "「お問い合わせフォーム」の受信先としてSlackを使用して受信するために学習しました。具体的には、webhook APIの取得を行ってコードに反映させる作業を行った経験があります。",comment2: "", open: false},
    {id: 8, category: "【タスク管理ツール】", name1: "Trello", name2: "", comment1: "学習の予定や転職の準備の把握のためのツールとして利用する他に、作品の作成のための参考のために使用しました。",comment2: "", open: false},
  ],
  otherSkillsData: {
      languages : [
      {id: 1, name: "HTML5", evaluation: "★★★"},
      {id: 2, name: "CSS3", evaluation: "★★★"},
      {id: 3, name: "PHP", evaluation: "★★☆"},
      {id: 4, name: "MySQL", evaluation: "★★☆"},
      {id: 5, name: "Git", evaluation: "★★☆"},
      {id: 6, name: "UNIX Command", evaluation: "★★☆"},
      {id: 7, name: "TypeScript", evaluation: "★★☆"},
      // {id: 8, name: "Vue.js", evaluation: "★★☆"},
      {id: 9, name: "Node.js", evaluation: "★★☆"},
      {id: 10, name: "Express", evaluation: "★☆☆"},
    ],
      tools : [
      // {id: 1, name: "Docker", evaluation: "★★☆"},
      // {id: 2, name: "WordPress", evaluation: "★★☆"},
      {id: 3, name: "PhotoShop", evaluation: "★☆☆"},
      {id: 4, name: "Feedly", evaluation: "★★☆"},
      {id: 5, name: "ESLint", evaluation: "★☆☆"},
      {id: 6, name: "Prettier", evaluation: "★☆☆"},
      // {id: 7, name: "SEO", evaluation: "★☆☆"},
    ]
  },
  artifactData : {
    myWork : [
      // {id: 1, img: Todo, access: "https://todo-application-d147e.web.app/", name: "Todoリスト", point: "こちらの作品は、プログラミング学習サイトを参考にゼロから作成してみたTodoリスト管理アプリです。こだわった点としては、オプション機能やメモを追加してみたことです。使用したフレームワークはReact.jsで、関数コンポーネントを使用していますす。環境構築はwebpackでScssと一緒にバンドル・コンパイルしています。"},
      {id: 2, img: "../img/TaskManagerApp.png", access: "https://task-manager-fb3b0.firebaseapp.com/", name: "Task Manager App", setting: "",point: "こちらの作品は、「Fog Creek Software」社が開発したwebアプリケーション「Trello」を模倣したアプリケーションです。React Hooksの学習の応用として作成しました。予め製作期間を15日間と決めて作成してみました。途中何度も挫折しました（笑）。デザインにこだわり、直感的に操作できるような工夫やドラッグアンドドロップ機能などがあります。一度作品に触れていただくと実感できるかと思いますのでどうぞご覧ください！（⚠レスポンシブ対応していません）"},
      // {id: 2, img: Chatbot, access: "https://chatbot-demo-b265d.web.app/", name: "Chatbot", point: "こちらの作品は「トラゼミ」さんが動画配信しているChatbot-demoの作品から作成したものです。特徴としてはFirebaseに保存してあるデータを呼び出している点と、非同期処理を導入している点です。こちらの作品を作る際、動画投稿日は約2年前だったため、そのままコーディングしても反映されなかったことがとても苦労しました。したがって、動かない部分はすべて自分で公式ドキュメントを読んだりして進めていきました。その結果、ただ動画で言ったとおりに学習するだけでなく、たくさんの副産物を手に入れることができました。"}
    ],
    reproductionCoding : {
      dotinstall : [
        {
          id: 1, 
          theme: "ポートフォリオ", 
          default : {
            true: {name: "default", access: "https://shokawakita.github.io/mysite/artifact/web/portfolio/default/index.html"},
            false: {name: "practice", access: "https://shokawakita.github.io/mysite/artifact/web/portfolio/practice/index.html"}
          }
        },
        {
          id: 2, 
          theme: "アプリ紹介", 
          default : {
            true: {name: "default", access: "https://shokawakita.github.io/mysite/artifact/web/application/default/index.html"},
            false: {name: "practice", access: "https://shokawakita.github.io/mysite/artifact/web/application/practice/index.html"}
          }
        },
        {
          id: 3, 
          theme: "ECサイト", 
          default : {
            true: {name: "default", access: "https://shokawakita.github.io/mysite/artifact/web/EC%20site/default/index.html"},
            false: {name: "practice", access: "https://shokawakita.github.io/mysite/artifact/web/EC%20site/practice/index.html"}
          }
        },
      ],
      webSite : [
        {
          id: 1, 
          theme: "中級編　その1", 
          default : {
            true: {name: "default", access: "https://shokawakita.github.io/mysite/artifact/coding/coding1/default/index.html"},
            false: {name: "practice", access: "https://shokawakita.github.io/mysite/artifact/coding/coding1/practice/index.html"}
          }
        },
        {
          id: 2, 
          theme: "中級編　その2", 
          default : {
            true: {name: "default", access: "https://shokawakita.github.io/mysite/artifact/coding/coding2/default/index.html"},
            false: {name: "practice", access: "https://shokawakita.github.io/mysite/artifact/coding/coding2/practice/Top.html"}
          }
        },
      ]
    }
  },
  learningTools : [
    {id: 1, name: "しまぶーのIT大学", type: "Youtube", access: "https://www.youtube.com/c/shimabu_it", usage: "モダンJavaScriptの学習、IT業界の知識のインプット", comment: "動画のクオリティが高く、わかりやすい教材を提供してくれているのでとてもわかり易いです。特に、モダンJavaScriptに関しては歴史的背景をもとに詳しく説明されているので勉強になりました。", evaluation: "★★★", click: "simabu", isOpen: false},
    {id: 2, name: "トラゼミ", type: "Youtube", access: "https://www.youtube.com/user/1492tiger", usage: "React.jsの学習", comment: "主にReactやTypeScriptの学習教材が豊富にあり初めてフレームワークを使用する方でも取り掛かりやすい。しかし、およそ2年前の動画になっているので新バージョンに対応していない部分もあるためその点に関しては逐次調べながら学習教材を扱う必要がある。むしろ私の場合はその部分も含めてどのように変化してきたかが理解できるきっかけになったのでとてもいい教材だと思いました。", evaluation: "★★☆", click: "torazemi", isOpen: false},
    {id: 3, name: "ドットインストール", type: "WebSite", access: "https://dotinstall.com/home", usage: "プログラミング言語の学習", comment: "こちらは私が最もお世話になった学習サイトです(事実、ドットインストールさんが提供する通信簿によると視聴合計時間は同期880人中1位でした)。おすすめの学習方法は他の動画視聴者の方の質問を確認することと、実際にソースコードを記述してみてソースコードの答え合わせを行うことです。", evaluation: "★★★", click: "dotinstall", isOpen: false},
    {id: 4, name: "Progate", type: "WebSite", access: "https://prog-8.com/", usage: "プログラミング言語の学習", comment: "こちらは私が初めてプログラミング言語の学習を行ったサイトです。見た目がシンプルで目的ごとのロードマップなどもあり、導入としては、かなり良い教材だと思いました。しかし、教材の範囲内では環境構築がされている状態での学習になるため、別途環境構築を学習しないとウェブページには自分の作品をアップできないので注意が必要です。", evaluation: "★★★", click: "progate", isOpen: false},
    {id: 5, name: "React公式ドキュメント", type: "WebSite", access: "https://ja.reactjs.org/", usage: "React.jsの学習", comment: "主にReactの最新バージョンの情報を入手する際に使用しました。公式のドキュメントなので信性が高く、わかりやすいのが特徴です。デフォルトは英語ですが日本語にも変換できます。", evaluation: "★★☆", click: "react-document", isOpen: false},
    {id: 6, name: "TinyPing", type: "その他", access: "https://tinypng.com/", usage: "画像圧縮", comment: "かんたんに画像の圧縮を瞬時に行うことができるのがとても扱いやすいです。私は処理速度を上げることができるという点で、ウェブサイトを作成する場合は必ず使用しています。", evaluation: "★★★", click: "tinyping", isOpen: false},
    {id: 7, name: "Material-UI", type: "その他", access: "https://mui.com/material-ui/getting-started/installation/", usage: "デザインされたUIの利用", comment: "Reactの学習の際に利用しました。すでにデザインされたUIをこちらでカスタムして使用することができるのかなりおすすめです。コンポーネントのカスタマイズについてはmaterialーUIの公式ドキュメントを別途参照する必要があります。", evaluation: "★★★", click: "material-ui", isOpen: false},
    {id: 8, name: "ぱくたそ", type: "その他", access: "https://www.pakutaso.com/", usage: "フリー素材の写真の確保", comment: "高品質で高解像度のフリー素材の画像を無料でダウンロードできるサイトです。管理者の方が写真ごとに独特なタイトルが書かれているので、ほしい写真が見つかりやすいです。", evaluation: "★★☆", click: "pakutaso", isOpen: false},
    {id: 9, name: "寿司打", type: "その他", access: "https://sushida.net/", usage: "タイピング練習", comment: "こちらはほぼ毎日私が使用していたタイピング練習サイトです。はじめは全くタイピングできなかったのですが現在では、難易度「高級」の普通レベルで10680点を獲得できるようになりました。時間制限制なので自動でタイピングが早くなれます。", evaluation: "★★★", click: "susida", isOpen: false},
    {id: 10, name: "myTyping", type: "その他", access: "https://typing.twi1.me/game/383", usage: "タイピング練習(英語)", comment: "こちらは「寿司打」と並行して使用していました。いろんな種類のタイピング練習ができるサイトですが、その中でもHTMLやCSSで使用するタグなどのタイピング練習ができるため、とても有効です。", evaluation: "★★☆", click: "typing", isOpen: false},
    {id: 11, name: "Bootstrap icon", type: "その他", access: "https://icons.getbootstrap.jp/", usage: "フリー素材のアイコンの確保", comment: "主にフリー素材のアイコンをダウンロードするために使用しました。かんたんな定型リンクをコードに貼り付けるだけで使用できるので便利です。他にも「Google font icons」や「Awesome Font」などもありますので自分が一番使いやすいものを使用するのがいいかと思います。", evaluation: "★★★", click: "bootstrap", isOpen: false},
  ],
  sns : [
    {id: 1, name: "Gmail", access: "", class: "bi bi-envelope"},
    {id: 2, name: "Twitter", access: "", class: "bi bi-twitter"},
    {id: 3, name: "Github", access: "https://github.com/shokawakita?tab=repositories", class: "bi-github"}
  ]
}

export default data;