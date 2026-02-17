---
title: "AIエージェントの財布を守れ！自作コスト監視スキルと救世主「GLM」定額プラン"
date: "2026-02-17"
---

# AIエージェントの財布を守れ！自作コスト監視スキルと救世主「GLM」定額プラン

話題の自律型エージェント「OpenClaw」。可能性しかないし、いろいろ触れているのが楽しくてガンガン触っているのだけれども、ひとつだけ頭の痛い問題があります。

**従量課金のAPI消費が甚だしい。**

これに尽きるのです。
メモリの機能をチューニングしたり、コンテキストトークンを減らすためにこまめにチャットをrefreshしたりしているのだけれども、ちょっとしたskillsの開発をOpenClawと一緒にやるだけで、あっという間にコストがかさんでいく。

使っているLLMはClaudeのスピードモデル、Haiku 3.5を使っているのだけど、それでもチリツモで、気づけばDailyで3-4ドルが消えていく…。
個人のR&D費用として、月間90ドル（今のレートだと約1万4000円！）は流石に痛すぎる。

ということで、この「OpenClaw金食い虫問題」に向き合ってみました。

## 敵を知る：コスト監視スキル「Cost Monitor」の導入

「彼を知り己を知れば百戦殆うからず」と申します。まずは現状を正確に把握せねばなりません。
余りに消費が激しいから、トークン消費のモニタリングスキルを導入してみました。Openclawにお願いして、自らサクッと作ったのがこちら。

AI消費コストモニタリングskillです。

<details>
<summary>Cost Monitor Skill (cost-monitor.yml) の全文はこちらをクリック</summary>

```yaml
name: cost-monitor
description: Track API token consumption and costs across all sessions. Provides daily summaries at 11 PM JST with hourly breakdowns and weekly summaries on Sundays. Monitors all Claude models and calculates estimated costs based on current pricing. Use for proactive cost management and budget awareness.
---

# Cost Monitor Skill

Automatically track token consumption and estimated API costs across all sessions.

## What It Does

### Daily Monitoring
1. **Real-time cost estimation**
   - Query current session token usage
   - Calculate estimated cost based on model pricing
   - Display immediately on request

2. **Daily Report (11:00 PM JST)**
   - Hourly token usage breakdown (input/output)
   - Daily total (input/output tokens + estimated cost)
   - Send via WhatsApp

3. **Weekly Report (Every Sunday 11:00 PM JST)**
   - Day-by-day summary (input/output + cost)
   - Weekly total (input/output tokens + estimated cost)
   - Trends and insights
   - Send via WhatsApp

### Storage System (Hybrid)
- **cost-log-summary.md** - Latest 90 days (light for MEMORY.md)
- **costs/YYYY-MM-DD.md** - Daily detailed logs (current month)
- **costs/archive/** - Historical data (older than 90 days)

## How to Use

### On-Demand Cost Check
```
"What's my cost today?" or "Show me token usage"
```
Returns immediate estimate with hourly breakdown.

### Scheduled Reports
- **Daily**: Automatically sent to WhatsApp at 23:00 JST
- **Weekly**: Automatically sent to WhatsApp every Sunday at 23:00 JST

## Token Pricing Configuration

Currently configured for:
- **Claude Haiku 3.5**
  - Input: $0.25 per 1M tokens (※最新の価格に合わせて調整)
  - Output: $1.25 per 1M tokens

Future support for:
- Claude 3.5 Sonnet
- Other Anthropic models

See `references/pricing-config.md` for model pricing details.

## Daily Report Example

```
📊 **Daily Cost Report - 2026-02-15**

**Hourly Breakdown:**
- 00:00-06:00: 12.5k input / 45.2k output
- 06:00-12:00: 28.3k input / 156.7k output
- 12:00-18:00: 8.9k input / 62.1k output
- 18:00-23:00: 5.2k input / 34.5k output

**Daily Total:**
- Input: 54.9k tokens
- Output: 298.5k tokens
- Estimated cost: $1.29

**Note:** Costs are estimates based on current pricing.
```

## Automation

Configured as cron jobs:
- Daily report: `0 23 * * *` (11:00 PM JST, Asia/Tokyo)
- Weekly report: `0 23 * * 0` (Sunday 11:00 PM JST, Asia/Tokyo)
```
</details>

これで毎日、私のWhatsAppに「今日の散財レポート」が届くようになりました。
便利です。便利ですが…、**計測したところで安くなるわけではない**という残酷な現実に直面します。「ああ、今日も3ドル使ってしまった…」と枕を濡らす日々。

## 救世主：中国製LLM「GLM」のCoding Plan

いろいろ探した結果、たどり着いたのが中国のZhipu AIが提供するLLM「GLM」です。
[https://z.ai/model-api](https://z.ai/model-api)

「中国製？セキュリティとか大丈夫？」と眉をひそめる方もいるかもしれません。ただ、OpenClawのような自律型エージェント開発において、今の私には背に腹は代えられません＆界隈の評判が非常によいのです。

何よりもすばらしいのは、**「GLM Coding Plan」というコーディング向けの特別パッケージ**が用意されていること。
なんと **liteプランだと月額10ドル（約1500円）のサブスクリプション**。

OpenClaw立ち上げから3日で9ドル近くのAPIコストを溶かしていた身からすると、まさに神のプラン。月額1500円で使い放題（※一定のフェアユースポリシーはあると思いますが）。

「安かろう悪かろう」かと思いきや、「GLM4」「GLM4.7」などの性能は非常に高く、「GLM4.7」はClaude 3.5 SonnetやGemini3クラスに匹敵するというベンチマーク結果もあります。

## 導入：定額制APIの「罠」をAIと乗り越える

ということで早速導入してみました。

1.  アカウント取得（Googleアカウントと連携。超簡単）
2.  月額プランをsubscribe。
    *   デフォルトでは3カ月継続プランが表示されているので、お試しなら「Monthly」プランに変更して契約しましょう。
3.  カード情報を入力（怖ければPaypal決済も可能）
4.  APIキーを取得

ここまでは超簡単。
OpenClawへの適用方法も、公式ドキュメントにガイドがあります。
[https://docs.z.ai/devpack/tool/openclaw](https://docs.z.ai/devpack/tool/openclaw)

※以前、OpenClawをAntigravity（Gemini）と接続しようとしてBANされたという情報が多数ありましたが、GLMなら公式サポートされているので安心です。

しかもこのガイドページ、中央のコピーボタンを押すと「このページの内容をAIエージェントに伝える用のテキストプロンプト」がコピーされるのです。なんて親切な設計。
これをAIに投げれば、あとはよしなにやってくれる…はずでした。

### ハマりポイント：エンドポイントの違い

基本はお任せでAntigravityに設定をお願いしたのですが、どうも動かない。「クレジット残高がありません」といったエラーが出る。課金したのに！

私がはまった罠がありました。
通常の従量課金APIと、定額制のCoding Plan APIでは **エンドポイントのURLが異なる** のです。

> Note: When using the GLM Coding Plan, you need to configure the dedicated Coding endpoint - `https://api.z.ai/api/coding/paas/v4` instead of the general endpoint - `https://api.z.ai/api/paas/v4`

通常のURLを設定してしまうと、定額プランを契約しているのに「従量課金の残高がないよ！」と怒られてしまうわけです。なるほど。

そして、ここからが「Vibe Coding」の真骨頂です。
私は黒い画面（ターミナル）を開いて`vim`で`config.json`を編集したりはしません。

**「Antigravityさん、SSHでサーバーに入って直してきて」**

これです。
Antigravity（私のパソコンの中にいるAI）が、XserverのVPSにSSHで接続します。
そしてコマンドラインでOpenClawを起動し、エラーログを見ながらOpenClaw（サーバーの中にいるAI）と対話します。

「ねえOpenClawくん、君の設定ファイルのURL、間違ってるみたいだよ。`config.json`のここの部分、`api/coding/paas/v4`に変えないとダメだって公式ドキュメントに書いてあるよ」
「あ、本当だ。修正します」

…という会話が（実際にはJSONやコマンドの応酬として）私の目の前で繰り広げられ、AntigravityがOpenClawをデバッグし、修正が完了しました。
私はそれをコーヒーを飲みながら眺めていただけ。

## 結論：心理的安全性はプライスレス

こうしてGLM Coding Planが導入されました。
今のところ非常に快適に動いています。GLMくん、日本語のやり取りも全く問題ありません。指示理解もシャープです。

なによりも、**トークンコストを気にせずに使えるのが最高に快適**。
「これ試したら1ドルかかるかな…」とためらうことなく、「とりあえずやってみて！ダメならもう一回！」とOpenClawに指示を出せる。この心理的安全性が、エージェント開発には不可欠だと痛感しました。

自律型エージェントの時代、定額制LLMこそが我々個人開発者の生命線になる予感がビンビンしております。
OpenClawの請求額に震えている皆様、GLM Coding Plan、おすすめです。

---
*Created by Human(Akira Tsukakoshi) & AI (Antigravity)*

**Post Credits**
- **Original Idea:** Human (Akira Tsukakoshi)
- **Structure:** AI (Antigravity)
- **Writing:** AI (80%) / Human (20%)
- **Translation:** AI (Antigravity)
