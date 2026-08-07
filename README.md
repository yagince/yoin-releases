# yoin-releases

macOS向け文字起こしアプリ **Yoin** の配布物と、アプリ内アップデート情報を配信するための公開リポジトリです。

## 置いているもの

- `appcast.xml` — Sparkle 2がアップデートの有無を確認するためのフィード
- Releases — Developer ID Applicationで署名し、Appleの公証を受けたDMG

## 置いていないもの

Yoin本体のソースコードは別のリポジトリにあり、公開していません。
署名鍵、公証用の資格情報、CIのsecretもここには含まれません。

## アップデートの検証

配布するDMGは二重に検証できます。

- AppleのDeveloper ID署名と公証により、Gatekeeperが配布元とアプリを検証します
- SparkleのEdDSA署名により、インストール済みのYoinが取得した更新を検証します

公開鍵はYoin.appへ埋め込まれており、対応する秘密鍵はこのリポジトリにはありません。

## 手動でのインストール

Releasesから最新のDMGをダウンロードし、`Yoin.app`を`Applications`へドラッグしてください。
