import { getPost } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage(props: {
    params: Promise<{ lang: string; category: string; slug: string }>;
}) {
    const params = await props.params;
    const post = getPost(params.category, params.slug, params.lang);

    if (!post) {
        notFound();
    }

    return (
        <article className="flex min-h-screen flex-col items-center p-8 lg:p-24">
            <div className="z-10 max-w-3xl w-full items-start justify-between font-mono text-sm lg:flex mb-12">
                <Link href={`/${params.lang}`} className="hover:underline">
                    ← Back to Top
                </Link>
                <p className="uppercase tracking-widest text-aibou-red">{post.category}</p>
            </div>

            <div className="max-w-3xl w-full">
                <h1 className="text-3xl lg:text-5xl font-bold font-serif mb-6 leading-tight">{post.title}</h1>
                <p className="text-gray-500 mb-12 border-b pb-4">{new Date(post.date).toLocaleDateString(params.lang === "ja" ? "ja-JP" : "en-US")}</p>

                <div className="prose prose-lg dark:prose-invert font-sans prose-headings:font-serif prose-a:text-aibou-red hover:prose-a:underline">
                    <MDXRemote source={post.content} />
                </div>
            </div>
        </article>
    );
}
