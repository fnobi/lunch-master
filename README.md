# lunch-master

## プロジェクトの初期化

* スプレッドシートを作成
    * ひながたを作って、コピーしてねという指示の仕方がわかりやすそう
* 「ツール」→「スクリプトエディタ」からエディタを作成、保存してGASプロジェクトを作成。ID（URL末尾の部分）をメモる。
* 下記の内容で、 `.clasp.json` を作成

```json
{
    "scriptId": "${プロジェクトのID}",
    "rootDir": "./src"
}
```

* `npm install`

* `npm run push`
    * `clasp push` が実行され、TypeScriptのビルド・ビルド結果のGAS側への同期が行われます

## シートの内容について

* 「メンバー」
* 「お店情報」
* 「config」
    * `slackWebhook`
    * `slackUserName`
    * `slackIconEmoji`
    * `groupMax`