import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Home(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const t = {
        ja: {
            headline: "AIと共に生きる、",
            subHeadline: "極小ビジネスの新しい形。",
            description: "AIBOU LABは、AIエージェントを「道具」ではなく「相棒」として迎え入れ、一人でも大企業に負けない価値を生み出すための実験と実践の記録です。",
            readMore: "記事を読む",
        },
        en: {
            headline: "Co-existing with AI,",
            subHeadline: "The new shape of Micro-Business.",
            description: "AIBOU LAB is a record of experiments and practices to welcome AI agents not as tools but as partners, creating value comparable to large enterprises even as an individual.",
            readMore: "Read Articles",
        },
    }[params.lang as "ja" | "en"];

    const allPosts = getAllPosts(params.lang);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between pb-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex px-4 pt-8 lg:px-0">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    AIBOU LAB
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none z-50 pointer-events-none">
                    <div className="flex place-items-center gap-2 p-8 pointer-events-auto lg:p-0 font-sans">
                        <Link
                            href="/ja"
                            className={`transition-colors ${params.lang === "ja" ? "font-bold text-sumi" : "text-gray-400 hover:text-sumi"}`}
                        >
                            JP
                        </Link>
                        <span className="text-gray-300">/</span>
                        <Link
                            href="/en"
                            className={`transition-colors ${params.lang === "en" ? "font-bold text-sumi" : "text-gray-400 hover:text-sumi"}`}
                        >
                            EN
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden mb-24">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-bg.png"
                        alt="AIBOU Background"
                        fill
                        className="object-contain opacity-20 pointer-events-none mix-blend-multiply dark:invert"
                        priority
                    />
                </div>

                <div className="z-10 text-center px-4">
                    <h1 className="text-2xl md:text-6xl font-serif font-bold mb-2 tracking-widest leading-normal">
                        {t.headline}<br />{t.subHeadline}
                    </h1>
                    <p className="text-base md:text-xl font-sans uppercase tracking-[0.2em] text-gray-400 mb-8 mt-4">
                        <span className="text-sumi font-semibold">AI</span> <span className="text-sumi font-semibold">B</span>usiness <span className="text-sumi font-semibold">O</span>rchestration <span className="text-sumi font-semibold">U</span>nit <span className="text-sumi font-semibold">LAB</span>oratory
                    </p>
                    <p className="max-w-xl mx-auto text-lg text-gray-700 font-sans leading-relaxed">
                        {t.description}
                    </p>
                </div>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-4 px-4 lg:px-0">
                {allPosts.map((post) => (
                    <Link
                        href={`/${params.lang}/${post.category}/${post.slug}`}
                        key={post.slug}
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            {post.title}{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                            {new Date(post.date).toLocaleDateString(params.lang === "ja" ? "ja-JP" : "en-US")}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-widest text-aibou-red">{post.category}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
