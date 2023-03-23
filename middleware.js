import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const stripDefaultLocale = (url) => {
  return url.replace("/default", "");
};

export function middleware({ nextUrl }) {
  const { locale, origin, pathname, search } = nextUrl;

  const shouldHandleLocale =
    !PUBLIC_FILE.test(pathname) &&
    !pathname.includes("/api/") &&
    locale === "default";

  return shouldHandleLocale
    ? NextResponse.redirect(
        `${origin}/de${stripDefaultLocale(pathname)}${search}`,
      )
    : undefined;
}
