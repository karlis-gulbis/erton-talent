/// <reference types="astro/client" />

import type { Locale } from "./i18n/ui";

declare global {
  namespace App {
    interface Locals {
      locale: Locale;
      t: (key: string) => string;
    }
  }
}

export { };


