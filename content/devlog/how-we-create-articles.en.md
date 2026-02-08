---
title: "Article Creation at AIBOU LAB: Co-Creating with AI (Antigravity)"
date: "2026-02-08"
---

I’d like to share a bit about how we create articles here at AIBOU LAB.

First, to be clear, the articles on this site are quite different from my personal newsletter.
My "flagship" newsletter, "[Harappa Daigaku Gakucho's Newsletter](https://harappa-daigaku.theletter.jp/)," is a weekly publication where I write purely with my own words, without any collaboration with AI. Naturally, it contains typos, the structure can be messy, and it reflects the fluctuations of my emotions at that moment.

But that’s intentional. I believe there is meaning in those very human fluctuations. It also serves as personal training for me to hone my ability to weave words.

However, writing alone takes time. For me, a single article usually takes 2 to 3 hours.
On the other hand, at AIBOU LAB, we have fundamentally changed the writing process with the intention of drastically improving speed and experimenting with AI co-creation.

This article creation process also embodies my three principles of collaboration with AIBOU:

1.  **Human in the loop:** Humans remain at the center and make the final decisions.
2.  **Orchestration:** Managing multiple AI agents like a conductor waving a baton.
3.  **Agile & Perpetual:** Endless improvement. Constantly changing and evolving.

It’s not about leaving everything to AI, nor is it about doing everything alone.
It is truly "Co-Creation."

### The Engine: Google’s IDE "Antigravity"

My buddy (AIBOU) for this article creation is Google's first AI-native IDE, "Antigravity." I can't say too much about the details yet, but it acts as a powerful partner.

The general production flow is as follows:

1.  I scribble down my thoughts without worrying about structure (rough notes are fine).
2.  AIBOU extracts the core message from those notes.
3.  AIBOU proposes a structure for the article and confirms any ambiguities or requests more information.
4.  Based on a style guide fed with my past 150 columns(!), AIBOU creates a Japanese draft that mimics my writing style.
5.  I refine the draft (this part is crucial!).
6.  AIBOU translates the refined article into English.
7.  We deploy the English and Japanese articles to the live site.

This entire sequence is held as a "Skill" within the project directory and executed on Antigravity.

### Astonishing Speed and Quality

From starting the article to uploading it, a single piece is completed in about **20 minutes**.
That’s less than one-sixth of my usual writing time.

Of course, the text written by AI may not yet fully reproduce my "fluctuations" or the "emotional texture" of my writing. But the draft, based on past data, is surprisingly "me-like."

As a matter of integrity, I make it a point to credit what and how much I collaborated with AI at the end of each post in this experiment.
A new writing experience co-created with AI. Through AIBOU LAB, I want to continue exploring these possibilities.

### Reference: Actual Skill File

Below is the actual Skill file (prompt) executed on Antigravity to create this article.

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
