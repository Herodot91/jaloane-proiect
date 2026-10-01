import { useEffect, useState } from "react";
import { COPY, type Lang } from "@/data/ui";

const KEY = "jaloane-lang";

export function useLang() {
  const [lang, setLangState] = useState<Lang>("ro");

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved === "en" || saved === "ro") setLangState(saved);
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem(KEY, next);
  }

  return { lang, setLang, c: COPY[lang] };
}
