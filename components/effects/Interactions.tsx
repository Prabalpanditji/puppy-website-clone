"use client";
import { useEffect } from "react";

const closest = (e: Event, sel: string) =>
  (e.target as Element | null)?.closest?.<HTMLElement>(sel) ?? null;
const bestSrc = (img: HTMLImageElement) => {
  const set = img.getAttribute("srcset");
  return set
    ? set
        .split(",")
        .map((s) => s.trim().split(" ")[0])
        .pop()!
    : img.src;
};

/** Click handlers for the static markup: menu, FAQ, tabs, filters, photo viewer, video, gallery, enquiry form. */
export default function Interactions() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      let t: HTMLElement | null;

      // mobile menu
      if ((t = closest(e, 'button[aria-haspopup="dialog"]'))) {
        document
          .querySelector<HTMLDialogElement>("dialog.tp-menu")
          ?.showModal();
        return;
      }
      const menu = closest(e, "dialog.tp-menu");
      if (menu && (closest(e, "button") || closest(e, "a")))
        return void (menu as HTMLDialogElement).close();

      // FAQ notes
      if ((t = closest(e, ".tp-note__q button"))) {
        const open = t.getAttribute("aria-expanded") !== "true";
        t.setAttribute("aria-expanded", String(open));
        const note = t.closest<HTMLElement>(".tp-note")!;
        if (open) note.dataset.unfolded = "";
        else note.removeAttribute("data-unfolded");
        const panel = document.getElementById(t.getAttribute("aria-controls")!);
        if (panel) {
          if (open) panel.removeAttribute("inert");
          else panel.setAttribute("inert", "");
        }
        return;
      }

      // ways-to-bring-home tabs
      if ((t = closest(e, '[role="tab"]'))) {
        const list = t.parentElement!;
        const tabs = [...list.querySelectorAll<HTMLElement>('[role="tab"]')];
        tabs.forEach((b, i) => {
          const on = b === t;
          b.setAttribute("aria-selected", String(on));
          b.tabIndex = on ? 0 : -1;
          if (on) list.style.setProperty("--at", String(i));
          const p = document.getElementById(b.getAttribute("aria-controls")!);
          if (p) p.hidden = !on;
        });
        return;
      }

      // puppy filters
      if ((t = closest(e, ".tp-sticker-chip"))) {
        const row = t.parentElement!;
        const chips = [
          ...row.querySelectorAll<HTMLElement>(".tp-sticker-chip"),
        ];
        const wasOn = t.getAttribute("aria-pressed") === "true";
        const isFirstRow = chips[0].textContent === "Everywhere";
        chips.forEach((c) => c.setAttribute("aria-pressed", "false"));
        if (isFirstRow)
          (wasOn ? chips[0] : t).setAttribute("aria-pressed", "true");
        else if (!wasOn) t.setAttribute("aria-pressed", "true");
        if (
          isFirstRow &&
          !chips.some((c) => c.getAttribute("aria-pressed") === "true")
        )
          chips[0].setAttribute("aria-pressed", "true");
        applyFilters();
        return;
      }

      // photo viewer (home wall, happy families)
      if ((t = closest(e, ".tp-photowall__print, .tp-wall__print")))
        return void openViewer(t);

      // video play/pause
      if ((t = closest(e, ".tp-clip__play"))) {
        const v = t.parentElement!.querySelector("video")!;
        if (v.paused)
          v.play()
            .then(() => t!.setAttribute("aria-pressed", "true"))
            .catch(() => {});
        else {
          v.pause();
          t.setAttribute("aria-pressed", "false");
        }
        return;
      }

      // puppy gallery
      if (
        (t = closest(
          e,
          'button[aria-label$="photo"], button[aria-label^="Open "], ul button[aria-label*=", photo "]'
        ))
      )
        gallery(t);
    };
    document.addEventListener("click", onClick);

    // FAQ search
    const onInput = (e: Event) => {
      const i = e.target as HTMLInputElement;
      if (
        !i.matches?.('input[type="search"], input[role="searchbox"]') &&
        !document.querySelector(".tp-note")
      )
        return;
      if (i.closest("form[novalidate]")) return;
      const q = i.value.trim().toLowerCase();
      let n = 0;
      document.querySelectorAll<HTMLElement>(".tp-note").forEach((li) => {
        const ok = !q || li.textContent!.toLowerCase().includes(q);
        li.hidden = !ok;
        if (ok) n++;
      });
      const c = [...document.querySelectorAll("p")].find((p) =>
        /notes? on the board/.test(p.textContent ?? "")
      );
      if (c) c.textContent = `${n} ${n === 1 ? "note" : "notes"} on the board`;
    };
    document.addEventListener("input", onInput);

    // enquiry forms
    const onSubmit = (e: SubmitEvent) => {
      const f = e.target as HTMLFormElement;
      if (!f.matches("form[novalidate]")) return;
      e.preventDefault();
      const v = (n: string) =>
        (f.elements.namedItem(n) as HTMLInputElement | null)?.value.trim() ??
        "";
      const bad: Record<string, string> = {};
      if (v("name").length < 2) bad.name = "Please tell us your name.";
      if (!/^\+?[\d\s()-]{7,20}$/.test(v("phone")))
        bad.phone = "Add a phone or WhatsApp number with country code.";
      if (v("email") && !/^\S+@\S+\.\S+$/.test(v("email")))
        bad.email = "That email doesn't look right.";
      f.querySelectorAll(".tp-field-err, .tp-form-msg").forEach((n) =>
        n.remove()
      );
      let first: HTMLInputElement | null = null;
      f.querySelectorAll<HTMLInputElement>("input[name]").forEach((i) => {
        const err = bad[i.name];
        i.setAttribute("aria-invalid", String(!!err));
        const ids = (i.getAttribute("aria-describedby") ?? "")
          .split(" ")
          .filter((x) => x && !x.endsWith("-err"));
        if (err) {
          const p = document.createElement("p");
          p.id = `${i.id || i.name}-err`;
          p.className = "tp-field-err mt-1 text-sm font-semibold";
          p.style.color = "#b3261e";
          p.setAttribute("role", "alert");
          p.textContent = err;
          i.insertAdjacentElement("afterend", p);
          ids.push(p.id);
          first ??= i;
        }
        if (ids.length) i.setAttribute("aria-describedby", ids.join(" "));
        else i.removeAttribute("aria-describedby");
      });
      const msg = document.createElement("p");
      msg.className = "tp-form-msg mt-4 font-semibold";
      msg.setAttribute("role", "status");
      if (first) {
        msg.textContent = "A few things need another look.";
        msg.style.color = "#b3261e";
        (first as HTMLInputElement).focus();
      } else {
        msg.textContent = "Thank you! We'll message you on WhatsApp shortly.";
        f.reset();
      }
      f.append(msg);
    };
    document.addEventListener("submit", onSubmit);
    return () => {
      document.removeEventListener("input", onInput);
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
    };
  }, []);
  return null;
}

function applyFilters() {
  const sel = [...document.querySelectorAll<HTMLElement>(".tp-sticker-chip")]
    .filter((c) => c.getAttribute("aria-pressed") === "true")
    .map((c) => c.textContent!.trim());
  const where = sel.find((s) => ["Imported", "Korean Teacup"].includes(s));
  const breed = sel.find((s) =>
    ["Maltipoo", "Pomeranian", "Poodle", "Cavapoo", "Shih Tzu"].includes(s)
  );
  const sex = sel.find((s) => ["Boys", "Girls"].includes(s));
  let n = 0;
  document.querySelectorAll<HTMLElement>(".tp-sketches > li").forEach((li) => {
    const label = li
      .querySelector("a")!
      .getAttribute("aria-label")!
      .toLowerCase();
    const ok =
      (!where || where === "Imported" || label.includes("korean teacup")) &&
      (!breed || label.includes(breed.toLowerCase())) &&
      (!sex || (sex === "Boys" ? /\bboy\b/ : /\bgirl\b/).test(label));
    li.hidden = !ok;
    if (ok) n++;
  });
  const count = document.querySelector("[aria-live=polite]");
  if (count)
    count.textContent = `${n} ${n === 1 ? "puppy" : "puppies"} looking for a home`;
}

function openViewer(btn: HTMLElement) {
  const dlg = [
    ...document.querySelectorAll<HTMLDialogElement>(
      'dialog[aria-label="Photo viewer"]'
    ),
  ].pop();
  if (!dlg) return;
  const prints = [
    ...document.querySelectorAll<HTMLElement>(
      ".tp-photowall__print, .tp-wall__print"
    ),
  ];
  let i = prints.indexOf(btn);
  const draw = () => {
    const img = prints[i].querySelector("img");
    dlg.innerHTML = `<div class="flex h-full flex-col items-center justify-center gap-4 p-4"><button type="button" data-v="close" class="absolute right-4 top-4 h-11 rounded-full bg-milk px-5 font-semibold text-cocoa">Close</button><img alt="${(img?.alt ?? "").replace(/"/g, "&quot;")}" src="${img ? bestSrc(img) : ""}" class="max-h-[80vh] max-w-full rounded-2xl object-contain" /><div class="flex items-center gap-4"><button type="button" data-v="prev" class="size-12 rounded-full bg-milk text-xl font-bold text-cocoa" aria-label="Previous photo">‹</button><span>${i + 1} / ${prints.length}</span><button type="button" data-v="next" class="size-12 rounded-full bg-milk text-xl font-bold text-cocoa" aria-label="Next photo">›</button></div></div>`;
  };
  dlg.onclick = (ev) => {
    const v = (ev.target as HTMLElement).closest<HTMLElement>("[data-v]")
      ?.dataset.v;
    if (v === "close" || ev.target === dlg) dlg.close();
    else if (v) {
      i = (i + (v === "next" ? 1 : -1) + prints.length) % prints.length;
      draw();
    }
  };
  draw();
  dlg.showModal();
}

function gallery(btn: HTMLElement) {
  const root = btn.closest("section, div")?.parentElement;
  const thumbs = [
    ...(root ?? document).querySelectorAll<HTMLElement>(
      'ul button[aria-label*=", photo "]'
    ),
  ];
  if (!thumbs.length) return;
  const cur = thumbs.findIndex(
    (t) => t.getAttribute("aria-current") === "true"
  );
  const label = btn.getAttribute("aria-label") ?? "";
  let to = thumbs.indexOf(btn);
  if (label === "Previous photo")
    to = (cur - 1 + thumbs.length) % thumbs.length;
  else if (label === "Next photo") to = (cur + 1) % thumbs.length;
  if (to < 0) return;
  thumbs.forEach((t, i) => t.setAttribute("aria-current", String(i === to)));
  const main = thumbs[0]
    .closest("ul")!
    .previousElementSibling?.querySelector("img");
  const src = thumbs[to].querySelector("img");
  if (main && src) {
    main.src = bestSrc(src);
    main.removeAttribute("srcset");
  }
}
