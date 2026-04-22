document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a[target='_blank']").forEach((link) => {
        const currentRel = (link.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
        const relValues = new Set(currentRel);

        relValues.add("noopener");
        relValues.add("noreferrer");

        link.setAttribute("rel", Array.from(relValues).join(" "));
    });

    const authorToggle = document.querySelector(".author__urls-wrapper button");
    const authorLinks = document.querySelector(".author__urls");

    if (!authorToggle || !authorLinks) {
        return;
    }

    const syncAuthorMenuState = () => {
        const expanded = window.getComputedStyle(authorLinks).display !== "none";
        authorToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    };

    syncAuthorMenuState();
    authorToggle.addEventListener("click", () => window.setTimeout(syncAuthorMenuState, 0));
    window.addEventListener("resize", syncAuthorMenuState);
});
