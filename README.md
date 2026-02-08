# AIBOU LAB

> Co-existing with AI agents for Micro-Businesses.

AIBOU LABは、AIを道具ではなくパートナー（"相棒"）として扱い、マイクロビジネスにおいても大企業に負けない価値を生み出すための実験と実践の記録を公開するバイリンガルメディアです。

「Vibe Coding」の実践を通じて、非エンジニアでもAIと共に高度なシステム構築が可能であることを実証します。

## 特徴

- **バイリンガルインターフェース**: 日本語（`/ja`）と英語（`/en`）のコンテンツをシームレスに切り替え可能。
- **デザインシステム**: 「Zen Modern」の美学に基づき、墨（Sumi）と和紙（Washi）の色調を中心としたTailwind CSS設計。
- **MDXコンテンツ**: 豊かな表現力を持つMDX形式で記事を管理。
- **POSSEモデル**: "Publish on Own Site, Syndicate Elsewhere" モデルを採用し、ここを母艦として各プラットフォームへ展開。
- **AIネイティブ**: AIエージェントが理解しやすい構造化データと`llms.txt`を完備。

## 技術スタック

- **フレームワーク**: [Next.js 15](https://nextjs.org/) (App Router)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **言語**: TypeScript
- **デプロイ**: Vercel (推奨)

## はじめに (Getting Started)

開発サーバーを起動するには、以下のコマンドを実行してください：

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、結果を確認できます。

## ディレクトリ構成

```
.
├── .agent/              # AIエージェント設定・スキル定義
├── content/             # 記事コンテンツ (MDX)
│   ├── devlog/          # 開発ログ
│   ├── experimental/    # 実験的コンテンツ
│   └── philosophy/      # 思想・コンセプト
├── public/              # 静的ファイル
│   ├── images/
│   └── llms.txt         # AIエージェント用マニフェスト
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/      # Reactコンポーネント
│   ├── lib/             # ユーティリティ関数
│   └── middleware.ts    # ミドルウェア (言語リダイレクト等)
├── writings/            # ドラフト・執筆プロセス用ディレクトリ
├── next.config.mjs
├── package.json
├── requirement.md       # 要件定義・設計書
└── README.md
```

## AI SEO (`llms.txt`)

このサイトはルートディレクトリに `/llms.txt` ファイルを含んでおり、AIエージェントがサイト構造やコンテンツの目的を理解しやすくするためのマニフェストとして機能します。

## ライセンス

[MIT](LICENSE)
