import { forwardProxy } from "./api";
import { URL_RE_STR } from "./constants";


export const getTitle = async (href: string) => {
    if (href.startsWith("http")) {
      try {
          const data = await forwardProxy(
              href,
              "GET",
              null,
              [{ "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.76" }],
              2000,
              "text/html"
          );

          if (!data || (data.status / 100) !== 2) {
              return null;
          }

          const html = data.body;
          const titleReg = /<title\b[^>]*>(.*?)<\/title>/;
          const matchRes = html?.match(titleReg);

          if (matchRes && matchRes[1]) {
              return window.Lute.UnEscapeHTMLStr(matchRes[1]);
          }

          return null;
      } catch (error) {
          console.error("Error fetching title:", error);
          return null;
      }
    }

    return null;
};

export const isPureURL = (href: string) => {
    const reg = new RegExp(URL_RE_STR);
    return reg.test(href);
};
