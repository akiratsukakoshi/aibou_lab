export default async function LangLayout(props: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    return <div className="min-h-screen flex flex-col">{props.children}</div>;
}

export async function generateStaticParams() {
    return [{ lang: 'ja' }, { lang: 'en' }]
}
