/* Language focus toggle for Abidjan bilingual slides.
   Keys: B = both, E = English only, F = French only */

(function () {
  const MODES = ["lang-mode-both", "lang-mode-en", "lang-mode-fr"];

  function setMode(mode) {
    document.body.classList.remove(...MODES);
    if (mode === "en") document.body.classList.add("lang-mode-en");
    else if (mode === "fr") document.body.classList.add("lang-mode-fr");
    else document.body.classList.add("lang-mode-both");

    document.querySelectorAll("#lang-toolbar button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === (mode === "both" ? "both" : mode));
    });
  }

  function toolbar() {
    if (document.getElementById("lang-toolbar")) return;
    const bar = document.createElement("div");
    bar.id = "lang-toolbar";
    bar.innerHTML = `
      <button type="button" data-lang="both" title="Both (B)">Both</button>
      <button type="button" data-lang="en" title="English only (E)">EN</button>
      <button type="button" data-lang="fr" title="French only (F)">FR</button>
    `;
    bar.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => setMode(btn.dataset.lang));
    });
    document.body.appendChild(bar);
  }

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    const k = e.key.toLowerCase();
    if (k === "b") setMode("both");
    if (k === "e") setMode("en");
    if (k === "f") setMode("fr");
  });

  document.addEventListener("DOMContentLoaded", () => {
    toolbar();
    setMode("both");
  });
})();
