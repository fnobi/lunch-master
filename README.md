# lunch-master

## プロジェクトの初期化

* `https://script.google.com/` から、新規でGASのプロジェクトを作成、IDをメモる
    * spreadsheetとの紐付けが必要そう

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