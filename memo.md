# 🎯目的

- SW2.5の魔法 / アイテム / 流派 / 魔物のデータを一括で閲覧・検索できる

- 各データはフィルタ・比較・お気に入りなどが可能

- オフライン動作 or 軽量SPAとして動作

# 🧩 機能カテゴリと主な仕様
- UIからデータ追加
- カテゴリ、名前、ランク、消費...などで検索、ソート可能
- 効果のテキスト検索も可能(優先度:低)

# 🧱 技術構成
- Vue 3 + TypeScript + Pinia（SPA）
- UIフレームワーク: Bulma または Tailwind CSS
- データ：静的JSONで管理（例：data/magic.json, data/items.json など）
- 高速検索：Fuse.js を使用（曖昧検索にも対応）
- データ保存：お気に入りや所持品は localStorage 管理（オフラインでもOK）
- フロントエンドツールとしてvite使用

# 🧰 機能案（UX強化）
- 🔍 共通検索バー：全カテゴリ横断で検索

- 📌 お気に入り登録

- 🧙‍♂️ 比較モード：任意の2件を比較表示（魔法、魔物、流派など）

- 🛒 所持品管理モード：アイテムを登録、重量や所持金と連動

- 📊 種族/レベル別おすすめ魔法・特技の提案（発展機能）

# ✅ 入力対応の基本設計方針
🔸 1. カテゴリごとの「追加」「編集」フォーム
例：魔法なら「新しい魔法を追加」「既存の魔法を編集」

v-modelとrefを使って双方向バインディング

🔸 2. ローカル保存（localStorage or indexedDB）
データは最初は data/*.json から読み込み

UIで追加・編集した内容は localStorage に保存 → 次回起動でも反映

🔸 3. デフォルトデータのインポート・リセット
初期状態に戻す「リセット」ボタン

公式データ（JSON）を読み込む「インポート」機能