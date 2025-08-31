import type { MiddlewareHandler } from "astro";
import { LOCALES, DEFAULT_LOCALE, ui, type Locale } from "./i18n/ui";

function getLocaleFromPath(pathname: string): Locale {
  const [, maybeLocale] = pathname.split("/");
  if (LOCALES.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }
  return DEFAULT_LOCALE;
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  const locale = getLocaleFromPath(new URL(context.request.url).pathname);

  const t = (key: string): string => {
    const dict = ui[locale] ?? ui[DEFAULT_LOCALE];
    return dict[key] ?? key;
  };

  context.locals.locale = locale;
  context.locals.t = t;

  return next();
};

// Types for Locals are globally augmented in src/env.d.ts


