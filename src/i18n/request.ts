import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const rawLocale = await requestLocale;
  const resolvedLocale = routing.locales.includes(rawLocale as any)
    ? (rawLocale as "en" | "ko")
    : routing.defaultLocale;

  const messages = (await import(`@/messages/${resolvedLocale}.json`)).default;

  return {
    locale: resolvedLocale,
    messages,
  };
});
