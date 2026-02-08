import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                sumi: "#1a1a1a",
                washi: "#fcfbf9",
                aibou: {
                    red: "#cc4444",
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'var(--font-noto)', 'sans-serif'],
                serif: ['var(--font-mincho)', 'serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
