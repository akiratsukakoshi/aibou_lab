import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export type Post = {
    slug: string;
    category: string;
    lang: string;
    title: string;
    date: string;
    content: string;
};

export function getPost(category: string, slug: string, lang: string): Post | null {
    const fullPath = path.join(contentDirectory, category, `${slug}.${lang}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        category,
        lang,
        title: data.title,
        date: data.date,
        content,
    };
}

export function getAllPosts(lang: string): Post[] {
    const categories = fs.readdirSync(contentDirectory);
    let posts: Post[] = [];

    categories.forEach((category) => {
        const categoryPath = path.join(contentDirectory, category);
        if (fs.statSync(categoryPath).isDirectory()) {
            const files = fs.readdirSync(categoryPath);
            files.forEach((fileName) => {
                if (fileName.endsWith(`.${lang}.md`)) {
                    const slug = fileName.replace(`.${lang}.md`, '');
                    const fileContents = fs.readFileSync(path.join(categoryPath, fileName), 'utf8');
                    const { data, content } = matter(fileContents);
                    posts.push({
                        slug,
                        category,
                        lang,
                        title: data.title,
                        date: data.date,
                        content,
                    });
                }
            });
        }
    });

    return posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}
