/*
 * Builds the Art Store, Unity Tools and Games sections from window.SITE_DATA
 * (js/site-data.js). Load with `defer` so it runs once the DOM is parsed.
 */
(function () {
    "use strict";

    var data = window.SITE_DATA;
    if (!data) {
        console.error("content.js: SITE_DATA is missing; load js/site-data.js first.");
        return;
    }

    // Small helper: el("div", { class: "x" }, child1, "text", ...)
    function el(tag, attrs) {
        var node = document.createElement(tag);
        if (attrs) {
            Object.keys(attrs).forEach(function (key) {
                var value = attrs[key];
                if (value === undefined || value === null || value === false) return;
                if (key === "class") node.className = value;
                else if (key === "text") node.textContent = value;
                else node.setAttribute(key, value);
            });
        }
        for (var i = 2; i < arguments.length; i++) {
            var child = arguments[i];
            if (child === null || child === undefined) continue;
            node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
        }
        return node;
    }

    function img(src, className, alt) {
        return el("img", { src: src, class: className, alt: alt || "", draggable: "false" });
    }

    function fill(container, nodes) {
        if (!container) return;
        container.innerHTML = "";
        nodes.forEach(function (n) { container.appendChild(n); });
    }

    /* ---------- Art Store ---------- */
    function renderArtStore(art) {
        if (!art) return;

        fill(document.querySelector("#artstore-section .gallery-container"),
            (art.categories || []).map(function (cat) {
                return el("div", { class: "gallery-item" },
                    el("div", { class: "art-title", text: cat.title }),
                    el("div", { class: "hidden-button-left" }),
                    el("div", { class: "hidden-button-right" }),
                    el.apply(null, ["div", { class: "scrollable" }].concat(
                        (cat.images || []).map(function (src) {
                            return img(src, "grey-image", cat.title);
                        })
                    ))
                );
            }));

        var banner = art.banner;
        var link = document.querySelector("#artstore-section .gallery-side > a");
        if (banner && link) {
            link.href = banner.link;
            link.target = "_blank";
            link.rel = "noopener";
            fill(link, [
                el("div", { class: "right-banner" },
                    el("div", { class: "banner-text", text: banner.text }),
                    img(banner.icon))
            ]);
        }
    }

    /* ---------- Unity Tools ---------- */
    function renderTool(tool) {
        var section = document.getElementById("tools-section");
        if (!tool || !section) return;

        fill(section.querySelector(".tool-title-container"), [
            el("div", { class: "logo-wrapper" }, img(tool.logo, null, tool.name + " logo")),
            el("div", { class: "title-wrapper" },
                el("div", { class: "tool-title", text: tool.name }),
                el("div", { class: "tool-tagline", text: tool.tagline }),
                tool.downloadLink
                    ? el("a", { href: tool.downloadLink, target: "_blank", rel: "noopener", text: tool.downloadText || "Download" })
                    : null)
        ]);

        var info = section.querySelector(".tool-info");
        if (info) info.textContent = tool.description || "";

        fill(section.querySelector(".images-list"),
            (tool.screenshots || []).map(function (shot) {
                return el("div", { class: "tool-img grey-image" },
                    img(shot.src, null, shot.title),
                    el("div", { class: "img-title-wrapper" },
                        el("div", { class: "tool-img-title", text: shot.title })));
            }));
    }

    /* ---------- Games ---------- */
    function renderGameTitle(game) {
        var title = el("div", { class: "game-title game-side-width" });
        var hl = game.highlight;
        var idx = hl ? game.title.indexOf(hl) : -1;
        if (idx < 0) {
            title.textContent = game.title;
        } else {
            title.appendChild(document.createTextNode(game.title.slice(0, idx)));
            title.appendChild(el("span", { class: "highlight", text: hl }));
            title.appendChild(document.createTextNode(game.title.slice(idx + hl.length)));
        }
        return title;
    }

    function renderGame(game) {
        var section = document.getElementById("games-section");
        if (!game || !section) return;

        var info = el("div", { class: "game-side-width game-info" });
        (game.paragraphs || []).forEach(function (p, i) {
            if (i > 0) info.appendChild(el("br"));
            info.appendChild(document.createTextNode(p));
        });

        fill(section.querySelector(".game-details-container"), [
            el("div", { class: "game-title-container" }, renderGameTitle(game)),
            el("a", {
                class: "game-side-width game-download",
                href: game.downloadLink || null,
                target: game.downloadLink ? "_blank" : null,
                rel: game.downloadLink ? "noopener" : null,
                text: game.downloadText || "Download"
            }),
            info
        ]);

        fill(section.querySelector(".game-img-container"), [
            img(game.mainImage, "game-main-img grey-image", game.title),
            el.apply(null, ["div", { class: "game-images-list" }].concat(
                (game.thumbnails || []).map(function (src) {
                    return el("div", null, img(src, "grey-image", game.title));
                })
            ))
        ]);
    }

    function render() {
        renderArtStore(data.artStore);
        renderTool((data.tools || [])[0]);
        renderGame((data.games || [])[0]);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", render);
    } else {
        render();
    }
})();
