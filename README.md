# AIBOU LAB

> Co-existing with AI agents for Micro-Businesses.

AIBOU LAB is a bilingual (Japanese/English) owned media site dedicated to the philosophy of treating AI as a partner ("AIBOU") and the practice of "Vibe Coding".

## Features

- **Bilingual Interface**: Seamless switching between Japanese (`/ja`) and English (`/en`) content.
- **Design System**: "Zen Modern" aesthetic using Tailwind CSS with a focus on Sumi (Black) and Washi (White) colors.
- **MDX Content**: Articles are written in MDX to support rich content components.
- **POSSE Model**: Built as the primary hub for content that syndicates to other platforms.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Deployment**: Vercel (Recommended)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: App Router pages and layouts.
- `src/lib`: Utility functions (e.g., Markdown processing).
- `content`: MDX content files organized by category.
- `public`: Static assets (images, `llms.txt`).

## AI SEO (`llms.txt`)

This site includes an `/llms.txt` file at the root to assist AI agents in understanding and navigating the content structure.

## License

[MIT](LICENSE)
