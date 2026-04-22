function toggleDiv(elementId, buttonId) {
    const panel = document.getElementById(elementId);
    const button = document.getElementById(buttonId);

    if (!panel || !button) {
        return;
    }

    const isHidden = panel.hidden || window.getComputedStyle(panel).display === "none";

    panel.hidden = !isHidden ? true : false;
    panel.style.display = isHidden ? "block" : "none";
    button.classList.toggle("btn--research-active", isHidden);
    button.setAttribute("aria-expanded", isHidden ? "true" : "false");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button[id^='abstractButton-']").forEach((button) => {
        const panelId = button.id.replace("abstractButton-", "abstract-");
        const panel = document.getElementById(panelId);

        if (!panel) {
            return;
        }

        button.setAttribute("aria-controls", panelId);
        button.setAttribute("aria-expanded", "false");

        if (window.getComputedStyle(panel).display === "none") {
            panel.hidden = true;
        }
    });
});
