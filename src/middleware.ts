import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ja", "en"];
const defaultLocale = "ja";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        const locale = defaultLocale;

        // Check if it's an asset or API call, ignore
        if (
            pathname.startsWith("/_next") ||
            pathname.startsWith("/images") ||
            pathname.startsWith("/favicon.ico") ||
            pathname.startsWith("/llms.txt") ||
            pathname.startsWith("/robots.txt") ||
            pathname.startsWith("/sitemap.xml")
        ) {
            return;
        }

        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
    ],
};
