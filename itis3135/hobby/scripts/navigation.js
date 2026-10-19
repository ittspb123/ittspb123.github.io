"use strict";

const sections = Array.from(document.querySelectorAll("main > section"));
const links = Array.from(document.querySelectorAll("header nav a"));

function showSection(id, moveFocus = false) {
    const selected = sections.find((section) => section.id === id) || sections[0];
    sections.forEach((section) => {
        section.hidden = section !== selected;
    });
    links.forEach((link) => {
        if (link.hash === `#${selected.id}`) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
    const heading = selected.querySelector("h2");
    document.title = `Anime: Between Episodes ✦ ${heading.textContent}`;
    if (moveFocus) heading.focus();
}

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = link.hash.slice(1);
        if (location.hash !== link.hash) history.pushState(null, "", link.hash);
        showSection(id, true);
    });
});

window.addEventListener("popstate", () => showSection(location.hash.slice(1), true));
window.addEventListener("hashchange", () => {
    if (sections.some((section) => `#${section.id}` === location.hash)) {
        showSection(location.hash.slice(1), true);
    }
});
showSection(location.hash.slice(1));

// On a published copy, validate the actual page rather than a fixed mirror.
if (location.protocol === "https:" || location.protocol === "http:") {
    const page = new URL(location.href);
    page.hash = "";
    const address = page.href;
    document.getElementById("validate-html").href =
        `https://validator.w3.org/nu/?doc=${encodeURIComponent(address)}`;
    document.getElementById("validate-css").href =
        `https://jigsaw.w3.org/css-validator/validator?uri=${encodeURIComponent(address)}`;
    document.getElementById("validate-accessibility").href =
        `https://wave.webaim.org/report#/${address}`;
}
