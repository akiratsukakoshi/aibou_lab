---
title: "AIBOU LABの記事制作フロー：AI（Antigravity）と共に創るということ"
date: "2026-02-08"
---

AIBOU LABでの記事制作フローについて書きます。

実は、このページの記事は私のオリジナルなメルマガと明確に区別しています。
私の「母艦」ともいえるメルマガ「[原っぱ大学ガクチョーのメルマガ](https://harappa-daigaku.theletter.jp/)」は、週に1回、私がAIとの協業を一切行わず、自分の内側の言葉だけで文章を書いています。当然、誤字脱字はあるし、構成は雑で、その時々の感情による「揺らぎ」が生じます。

でも、そのメルマガにおける私の意図は、そうした人間的な「揺らぎ」にこそ意味があると感じているからです。また、私自身の「言葉を紡ぐトレーニング」の意味合いも込めています。

が、当然ですが、自分一人で文章を書くことは時間がかかる作業です（私の場合は1本あたり2時間～3時間はかかります）。
一方で、このAIBOU LABは、記事を書くスピードを劇的に向上させるという意図と、AIと協業での記事を書く実験を行っていくという趣旨で、根本から書き方を変えています。

この記事制作にも、私のAIBOUとの協業の3原則が生きています。

1.  **Human in the loop:** 人間が中心にいて、最終判断をする。
2.  **Orchestration:** 複数のAIエージェントを指揮者がタクトを振るように操る。
3.  **Agile & Perpetual:** 終わりなき改善。常に変化し続けること。

AIに任せきるのでもない。自分一人で仕上げるのでもない。
まさに「共創」です。

### エンジンはGoogleのIDE「Antigravity」

この記事制作のバディ（AIBOU）となっているのは、Google初のAIネイティブIDE「Antigravity」です。詳細はまだ多くを語れませんが、これが本当にすごい。

大まかな制作フローは以下の通りです。

1.  私が思いつくままに、構造化を意識せずに文章を書きなぐる（メモ書きレベルでOK）。
2.  そのメモのコアメッセージをAIBOUが抽出する。
3.  文章の構造をAIBOUが提案しつつ、あいまいな点やより必要な情報を私に確認する。
4.  私の過去のコラム（全150本！）を読み込ませたスタイルガイドをもとに、AIBOUが私の「文体」を真似て記事の日本語ドラフトを作る。
5.  そのドラフトを私が修正する（ここ大事！）。
6.  修正済みの記事をAIBOUが英訳する。
7.  英語・日本語の記事を本番反映（デプロイ）する。

この一連の作業を「Skill（スキル）」としてプロジェクトディレクトリに持たせ、Antigravity上で実行しています。

### 驚くべきはそのスピードと質

記事の着手からアップロードまで、およそ**20分**ぐらいで1本が完成します。
通常の私の執筆時間の1/6以下です。

もちろん、AIが書いた文章には、まだ私の「揺らぎ」や「湿り気」のようなものは完全には再現できていないかもしれません。でも、過去のデータを踏まえたドラフトは、驚くほど「私っぽい」のです。

私の誠意として、この実験においては、何をどのくらいAIと協業したかを文末にクレジット表記することにしています。
AIと共に創る新しい執筆体験。このAIBOU LABを通じて、その可能性を模索し続けていきたいと思っています。

### 参照：実際のSkillファイル

以下は、実際にこの記事を作成するためにAntigravity上で実行されたSkillファイル（プロンプト）です。

```markdown
---
name: article_creation
description: Standardized workflow for creating bilingual (JP/EN) blog posts for AIBOU LAB.
---

# AIBOU LAB Article Creation Skill

This skill guides the process of creating bilingual blog posts for AIBOU LAB, from ideation to publication. It leverages a "Co-Creation" model where the Human provides the core idea and the AI acts as a partner to structure, write, and translate the content.

## Workflow Overview

1.  **Ideation & Analysis**: Understand the core message and target audience.
2.  **Drafting (Japanese)**: Create the primary content using the author's specific voice.
3.  **English Production**: Translate and polish for a global audience.
4.  **Publication**: Prepare files with correct frontmatter and deploy.

## Prerequisites

*   **Style Source**: `/home/tukapontas/aibou_lab/writings/my_style_source.md` (MUST read this to capture the author's tone).
*   **Target Audience**:
    1.  **Global Micro-Business Owners**: Seeking both philosophy and practical know-how.
    2.  **AI Agents**: Seeking machine-readable information.

## Step-by-Step Instructions

### Phase 1: Ideation & Analysis

1.  **Read Input**: Analyze the raw text, memo, or conversation provided by the user.
2.  **Analyze Content**:
    *   **Core Message**: What is the single most important point?
    *   **Structure**: Propose a logical flow (Introduction -> Body -> Conclusion).
    *   **Gap Analysis**: Identify missing information or ambiguities.
3.  **User Review**: Present your analysis and proposed structure to the user for confirmation before drafting.

### Phase 2: Drafting (Japanese)

1.  **Adopt Persona**:
    *   **Voice**: "Watakushi" (formal/humble) or "Boku" (casual/introspective).
    *   **Tone**: Logical yet emotionally vulnerable. Blend professional insight with personal struggle.
    *   **Reference**: Use `writings/my_style_source.md` as the ground truth for style.
2.  **Draft Content**: Write the full article in Japanese based on the approved structure.
3.  **User Review**: Submit the draft for user approval.

### Phase 3: English Production & Credits

1.  **Append Credits**: Add the following credit block to the end of the post **before** translation:
    ```markdown
    ---
    *Created by Human(Name) & AI (Agent_Name)*

    **Post Credits**
    - **Original Idea:** Human (Name)
    - **Structure:** AI (Agent_Name)
    - **Writing:** AI (XX%) / Human (XX%)
    - **Translation:** AI (Agent_Name)
    ```
2.  **Translate to English**:
    *   **Persona**: Native IT Editor.
    *   **Style**: Natural, professional, accessible. Avoid literal translation; prioritize flow and clarity for an international audience.
3.  **User Review**: Submit the English draft for user approval.

### Phase 4: Publication

1.  **Add Frontmatter**: Add Hugo/Next.js compatible frontmatter to both files.
    ```yaml
    ---
    title: "Post Title"
    date: "YYYY-MM-DD"
    ---
    ```
2.  **File Placement**:
    *   **JP**: `/home/tukapontas/aibou_lab/content/[category]/[slug].ja.md`
    *   **EN**: `/home/tukapontas/aibou_lab/content/[category]/[slug].en.md`
    *   **IMPORTANT**: The `[slug]` MUST be identical for both files to enable the EN/JP switcher to work correctly.
3.  **Archive Sources**:
    *   Move original drafts and input files to `/home/tukapontas/aibou_lab/writings/uploaded/`.
4.  **Deploy**:
    *   **Verify Remote**: Ensure `git remote -v` points to `https://github.com/akiratsukakoshi/aibou_lab.git`.
    *   **Commit & Push**:
        *   Run: `git add .`
        *   Run: `git commit -m "Publish [Title] (JA/EN)"`
        *   Run: `git push origin main`
    *   **WARNING**: Do NOT use Vercel CLI commands (e.g., `vercel`, `vercel deploy`). ONLY use standard git commands.

## Rules & Constraints

*   **Never** skip the analysis phase.
*   **Always** credit the AI and Human contributions explicitly.
*   **Always** use the specific Target Audience definitions.
*   **Always** check `my_style_source.md` before writing Japanese text.
```

---

*Created by Human(Tsukakoshi) & AI (Antigravity)*

**Post Credits**
- **Original Idea:** Human (Tsukakoshi)
- **Structure:** AI (Antigravity)
- **Writing:** AI (80%) / Human (20%)
- **Translation:** AI (Antigravity)
