# Yoin

![Yoin — 声の余韻を、言葉に。](docs/assets/yoin-og.png)

> 声の余韻を、言葉に。
>
> 声が消えたあとも、意味は言葉として残る。

Yoin（ヨイン）は、会話の余韻を役立つ言葉としてMacに残す、プライバシー重視の
macOSアプリです。名前は日本語の「余韻」に由来します。声そのものが消えた後にも、
そこで交わされた意味や判断を文字として読み返し、次の行動へつなげられることを
表しています。

メニューバーに常駐し、マイクとシステム音声を別々に取得して、選択したオンデバイス
モデルでリアルタイムに文字起こしします。終了後はMac内のローカルモデルで整形し、
履歴から読み返し、再整形、編集、書き出しができます。

**音声も文章も、このMacの外へ送りません。** 文字起こしと整形はすべてオンデバイス
モデルで行い、クラウドの文字起こしや遠隔のログ収集は使いません。

## ダウンロード

[Releases](https://github.com/yagince/yoin-releases/releases/latest)から最新のDMGを
取得し、`Yoin.app`を`Applications`へドラッグしてください。

インストール済みのYoinは、メニューバーの「アップデートを確認…」から更新できます。
設定の「一般 > アップデート」で自動確認を切り替えられます。

## 必要環境

- Apple Silicon Mac
- macOS 26以降

## 配布物の検証

配布するDMGは二重に検証できます。

- AppleのDeveloper ID署名と公証により、Gatekeeperが配布元とアプリを検証します
- SparkleのEdDSA署名により、インストール済みのYoinが取得した更新を検証します

公開鍵は`Yoin.app`へ埋め込まれており、対応する秘密鍵はこのリポジトリにはありません。

手元で確認する場合は次を実行してください。

```sh
spctl --assess --type execute --verbose=4 /Applications/Yoin.app
codesign --test-requirement="=notarized" --verify /Applications/Yoin.app
```

`source=Notarized Developer ID`と`explicit requirement satisfied`が出れば、
署名と公証を確認できています。

## このリポジトリについて

Yoinの配布物と、アプリ内アップデート情報を配信するための公開リポジトリです。

- `docs/appcast.xml` — Sparkle 2がアップデートの有無を確認するためのフィード
- Releases — Developer ID Applicationで署名し、Appleの公証を受けたDMG

Yoin本体のソースコードは別のリポジトリにあり、公開していません。
署名鍵、公証用の資格情報、CIのsecretもここには含まれません。
