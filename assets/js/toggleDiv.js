function toggleDiv(elementId, buttonId) {
    const panel = document.getElementById(elementId);
    const button = document.getElementById(buttonId);

    if (!panel || !button) {
        return;
    }

    const willExpand = panel.hidden;

    panel.hidden = !willExpand;
    button.classList.toggle("btn--research-active", willExpand);
    button.setAttribute("aria-expanded", String(willExpand));
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

        panel.hidden = true;
    });
});
