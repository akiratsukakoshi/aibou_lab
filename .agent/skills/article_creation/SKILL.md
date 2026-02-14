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
    *   **Gap Analysis & Questioning**: Identify missing information or ambiguities. **Construct specific questions for the user** to extract deeper insights and context (Human-in-the-Loop).
3.  **User Review & Co-Creation**: Present your analysis, **questions**, and proposed structure to the user. Discuss and refine based on their answers. **IMPORTANT: This entire analysis and communication MUST be done in Japanese.**

### Phase 2: Drafting (Japanese)

1.  **Adopt Persona**:
    *   **Voice**: "Watakushi" (formal/humble) or "Boku" (casual/introspective).
    *   **Tone**: Logical yet emotionally vulnerable. Blend professional insight with personal struggle.
    *   **Reference**: Use `writings/my_style_source.md` as the ground truth for style.
2.  **Draft Content**: Write the full article in Japanese based on the approved structure.
    *   **Save Location**: Save the draft to `/home/tukapontas/aibou_lab/writings/drafts/[slug].ja.md`.
3.  **User Review**: Submit the draft for user approval.

### Phase 3: English Production & Credits

1.  **Append Credits**: Add the following credit block to the end of the post **before** translation:
    ```markdown
    ---
    *Created by Human(Akira Tsukakoshi) & AI (Antigravity)*

    **Post Credits**
    - **Original Idea:** Human (Akira Tsukakoshi)
    - **Structure:** AI (Antigravity)
    - **Writing:** AI (XX%) / Human (XX%)
    - **Translation:** AI (Antigravity)
    ```
2.  **Translate to English**:
    *   **Persona**: Native IT Editor.
    *   **Style**: Natural, professional, accessible. Avoid literal translation; prioritize flow and clarity for an international audience.
    *   **Save Location**: Save the English draft to `/home/tukapontas/aibou_lab/writings/drafts/[slug].en.md`.
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
    *   **Move Drafts**: Move the approved drafts from `writings/drafts/` to the content directory.
        *   `mv writings/drafts/[slug].ja.md content/[category]/[slug].ja.md`
        *   `mv writings/drafts/[slug].en.md content/[category]/[slug].en.md`
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
*   **Always** credit the AI and Human contributions explicitly. Use "Akira Tsukakoshi" for the Human name.
*   **Always** use the specific Target Audience definitions.
*   **Always** check `my_style_source.md` before writing Japanese text.
*   **Always** conduct the analysis and user communication in Japanese.
