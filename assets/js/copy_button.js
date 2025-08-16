function copyBibtex(elementId) {
    const bibtexElement = document.getElementById(elementId);
    if (!bibtexElement) {
        console.error("Element not found:", elementId);
        return;
    }

    // Extract text from the <code> block inside the <pre>
    const bibtexContent = bibtexElement.innerText.trim();

    // Copy to clipboard
    navigator.clipboard.writeText(bibtexContent).then(() => {
    }).catch(err => {
        console.error("Error copying BibTeX: ", err);
    });
}
