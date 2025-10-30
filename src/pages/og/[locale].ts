import { OGImageRoute } from "astro-og-canvas";
import { ui, DEFAULT_LOCALE, LOCALES, type Locale } from "../../i18n/ui";

export const prerender = true;

const pages = Object.fromEntries(
  (LOCALES as readonly string[]).map((loc) => [loc, { locale: loc }])
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "locale",
  pages,
  getImageOptions: (_path, page) => {
    const raw = (page?.locale ?? DEFAULT_LOCALE) as Locale;
    const locale = (LOCALES as readonly string[]).includes(raw) ? (raw as Locale) : DEFAULT_LOCALE;
    const t = (key: string) => (ui[locale]?.[key] ?? ui[DEFAULT_LOCALE]?.[key] ?? key);

    return {
      title: t("site.title"),
      description: t("site.description"),
      padding: 64,
      // #0B1021 as solid background
      bgGradient: [[11, 16, 33]]
    };
  }
});


