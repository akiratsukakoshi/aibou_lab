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
3.  **Archive Sources**:
    *   Move original drafts and input files to `/home/tukapontas/aibou_lab/writings/uploaded/`.
4.  **Deploy**:
    *   Run: `git add .`
    *   Run: `git commit -m "Publish [Title] (JA/EN)"`
    *   Run: `git push`

## Rules & Constraints

*   **Never** skip the analysis phase.
*   **Always** credit the AI and Human contributions explicitly.
*   **Always** use the specific Target Audience definitions.
*   **Always** check `my_style_source.md` before writing Japanese text.
