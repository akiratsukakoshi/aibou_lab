# AIBOU LAB 記事作成ワークフロー

AIBOU LABの記事作成プロセスは、人間（あなた）の生のアイデアを、AI（私）との共創（Co-creation）を通じて、日英両言語の高品質なブログ記事へと昇華させるための標準化されたワークフローです。

## コア・フィロソフィー
1.  **Human-in-the-Loop**: 人間が「種（アイデア/メモ）」を提供し、最終的なニュアンスやトーンの承認を行う。
2.  **Orchestration**: AIはパートナーとして、構成、執筆、翻訳を指揮・実行する。
3.  **Co-Creation**: 記事には必ず、人間とAIの役割と貢献度を明記する。

## 前提条件
*   **入力**: 生のテキストファイル、メモ、または会話ログ。
*   **スタイルソース**: `writings/my_style_source.md` （日本語のトーン定義）。
*   **ペルソナ (英語)**: "Native IT Editor" （自然でプロフェッショナル、かつ親しみやすい）。

## ワークフローの手順

### フェーズ1: 構想と分析 (Ideation & Analysis)
1.  **入力の読み込み**: ユーザーから提供された情報を読み込む。
2.  **分析**:
    *   **コアメッセージ**の抽出。
    *   **ターゲットオーディエンス**の特定（以下の2つで固定）。
        1.  **Global Micro-Business Owners:** 哲学と実践の両方を求める個人事業主・小規模経営者。
        2.  **AI Agents:** 検索AI、要約AIなどの自律エージェント（Machine Readableな情報を求めている）。
    *   **構成案**の提示（見出し、導入、本文、結論）。
    *   **不足情報**や曖昧な点の特定。
3.  **ユーザーレビュー**: 分析結果と質問事項をユーザーに提示し、確認を得る。

### フェーズ2: 日本語ドラフト作成 (Drafting - Japanese)
1.  **コンテキスト読み込み**: `writings/my_style_source.md` を読み込み、ユーザーの声（「私/僕」、論理的な洞察と人間らしい弱さの表現）を内面化する。
2.  **ドラフト作成**: 承認された構成に基づき、日本語のフルドラフトを作成する。
    *   **ストーリー**: 個人的な物語（葛藤） -> 気づき（転換点） -> 哲学/行動への呼びかけ。
3.  **ユーザーレビュー**: ドラフトを提示し、承認を得る。

### フェーズ3: 英語化とクレジット表記 (English Production & Credits)
1.  **クレジットブロックの追加**: 記事の末尾に、以下の形式で役割分担を明記する。
    ```markdown
    ---
    *Created by Human(Name) & AI (Agent_Name)*

    **Post Credits**
    - **Original Idea:** Human (Name)
    - **Structure:** AI (Agent_Name)
    - **Writing:** AI (XX%) / Human (XX%)
    - **Translation:** AI (Agent_Name)
    ```
2.  **翻訳**: 承認された日本語ドラフトを英語に翻訳する。
    *   **トーン**: Native IT Editor。直訳を避け、自然なリズムと適切なIT文脈を優先する。
3.  **ユーザーレビュー**: 英語ドラフトを提示し、承認を得る。

### フェーズ4: 公開・反映 (Publication)
1.  **フロントマター**: 両方のファイルにHugo/Next.js互換のフロントマターを追加する。
    ```yaml
    ---
    title: "記事タイトル"
    date: "YYYY-MM-DD"
    ---
    ```
2.  **ファイル配置**:
    *   JP: `content/[category]/[slug].ja.md`
    *   EN: `content/[category]/[slug].en.md`
3.  **アーカイブ**:
    *   ドラフトと入力ファイルを `writings/uploaded/` に移動する。
4.  **デプロイ**:
    *   `git add .`, `git commit -m "Publish [Title] (JA/EN)"`, `git push` を実行する。

## 成果物
*   **公開コンテンツ**: `content/[category]/[slug].[lang].md`
*   **アーカイブされたソース**: `writings/uploaded/[date]_[slug]_draft.mdx`
