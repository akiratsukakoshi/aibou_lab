------

# AIBOU LAB Project Design Document



## 1. Project Overview (概要)



### 1.1 Brand Identity

- **Name:** AIBOU LAB

- **Full Name:** Artificial Intelligence Business Orchestration Unit LAB

- **Concept:** "Co-existing with AI agents for Micro-Businesses"

- **Core Philosophy:**

    - **AIBOU (相棒):** 日本独自の「アニミズム（万物に魂を見出す）」精神に基づき、AIを道具ではなくパートナーとして扱う。

    - **Orchestration (指揮):** 複数のAIエージェントやツールを指揮し、極小規模（Micro）ながらも大企業に負けない価値を生み出す。



### 1.2 Mission

世界中のスモールビジネスオーナー（特に非エンジニア）に向けて、AIとの「共生哲学」と、Vibe Codingによる「実践的なシステム構築」の記録を提供し、エンパワーメントする。



### 1.3 Target Audience

1. **Global Micro-Business Owners:** 哲学と実践の両方を求める個人事業主・小規模経営者。

2. **AI Agents:** 検索AI、要約AIなどの自律エージェント（Machine Readableな情報を求めている）。



---



## 2. Content Strategy (コンテンツ戦略)



### 2.1 Language

- **Bilingual (JA/EN):** 日本語と英語の併記。海外発信を主眼に置きつつ、思考の源泉である日本語も大切にする。



### 2.2 Categories

1. **Philosophy (思想):**

   - AIとの向き合い方、チームビルディング論、アニミズム的AI観。

2. **Orchestration / Dev Log (実践):**

   - Vibe Coding（Next.js, Python）の開発ログ、非エンジニアによる実装記録。

3. **Experimental (実験):**

   - AIエージェント同士の対話ログ、最新APIのテストなど。



### 2.3 Production Flow (Human-in-the-loop)

1. **Human:** 思考の種（断片的なメモ、音声、日本語）を出す。

2. **AI:** 構造化、翻訳、コード生成、拡張を行う。

3. **Human:** 最終的な「熱量」や「ニュアンス」を調整し、公開承認（Approve）する。



---



## 3. Platform Strategy: POSSE Model (展開戦略)



**POSSE (Publish on Own Site, Syndicate Elsewhere)** モデルを採用し、オウンメディアを母艦として各プラットフォームへ展開する。



### 3.1 Primary Hub (母艦)

- **AIBOU LAB (Official Website):**

  - 全てのオリジナルコンテンツの一次掲載場所。

  - ドメインパワーとデータの所有権をここに集約する。



### 3.2 Syndication Channels (出張所)

母艦での公開後、ターゲットに合わせて以下のPFへ転載・拡散を行う。



| Platform | Role | Content Type | Strategy |

| :--- | :--- | :--- | :--- |

| **Medium** | Global Blog | Essay / Philosophy | 英語記事を転載（Import）。CanonicalタグによりSEO評価を母艦に維持しつつ、海外読者にリーチする。 |

| **Dev.to** | Tech Community | Dev Log / Code | 技術的なVibe Codingの実践記録を転載。エンジニアコミュニティからのフィードバックを得る。 |

| **LinkedIn** | Business Profile | Summary + Link | 記事の要約とビジネス的示唆（Insight）を投稿し、母艦へ誘導。実名での信頼構築。 |

| **note** | Japan Blog | Essay (JP) | 日本語圏向けのリーチが必要な場合のみ転載（優先度は状況による）。 |



---



## 4. Technical Architecture (技術仕様)



「人間にも、AIにも届く」を実現する AI-First な構成。



### 4.1 Tech Stack

- **Framework:** Next.js (App Router)

- **Deployment:** Vercel

- **Data Source:** Local Markdown / MDX files

- **Styling:** Tailwind CSS



### 4.2 AI Discovery Optimization (AI SEO)

- **`llms.txt`:** - サイトルートに配置するAIエージェント向けのマニフェストファイル。

  - サイトの目的、主要コンテンツへのパス、推奨される読み込み方法を記述。

- **Raw Data Access:**

  - 記事ページにおいて、レンダリングされたHTMLだけでなく、元のMarkdownソース自体へアクセスできるAPIルートまたはリンクを提供する。



---



## 5. Roadmap (直近のアクション)



1. **Environment Setup:** Next.js プロジェクトの立ち上げとMarkdownブログ機能の実装。

2. **`llms.txt` Creation:** AI向けプロフィールの作成と配置。

3. **First Content:** - "Hello World" (Philosophy): なぜ今、AIBOU LABなのか。

   - "Vibe Coding Environment" (Practice): 開発環境の構築ログ。

4. **Account Setup:** Medium, Dev.to, LinkedIn のアカウント開設とプロフィール整備。