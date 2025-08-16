function toggleDiv(elementId, buttonId) {
    if (document.getElementById(elementId).style.display == "none") {
        document.getElementById(elementId).style.display = "block";
        document.getElementById(buttonId).classList.add("btn--research-active")
    } else {
        document.getElementById(elementId).style.display = "none";
        document.getElementById(buttonId).classList.remove("btn--research-active")
    }
}