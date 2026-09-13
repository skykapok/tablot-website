const root = document.documentElement;
const buttons = document.querySelectorAll("[data-set-lang]");
const titles = {
  home: { zh: "拼图桌 · 一桌照片，拼好一整组", en: "Collage Desk · A whole set of collages" },
  support: { zh: "技术支持 · 拼图桌", en: "Support · Collage Desk" },
  privacy: { zh: "隐私政策 · 拼图桌", en: "Privacy Policy · Collage Desk" }
};

function setLanguage(language) {
  const locale = language === "en" ? "en" : "zh";
  root.dataset.locale = locale;
  root.lang = locale === "zh" ? "zh-CN" : "en";
  buttons.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.setLang === locale));
  });
  document.title = (titles[root.dataset.page] || titles.home)[locale];
  document.querySelectorAll("[data-alt-zh]").forEach(image => {
    image.alt = image.getAttribute(`data-alt-${locale}`);
  });
  if (root.dataset.page === "home") {
    document.querySelector('meta[name="description"]').content = locale === "zh"
      ? "没有广告，没有杂七杂八的功能。拼图桌让你一次选好照片，在同一张桌上拼好一整组。"
      : "No ads. No clutter. Pick your photos once and make a whole set of collages on one desk.";
  }
  try { localStorage.setItem("collage-desk-language", locale); } catch (_) {}
}

let savedLanguage;
try { savedLanguage = localStorage.getItem("collage-desk-language"); } catch (_) {}
const requestedLanguage = new URLSearchParams(location.search).get("lang");
const browserLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
setLanguage(requestedLanguage || savedLanguage || browserLanguage);
buttons.forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.setLang)));
