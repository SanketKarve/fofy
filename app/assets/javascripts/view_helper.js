function getCSRFToken() {
    return document.querySelector('meta[name="csrf-token"]').getAttribute("content");
}

function isIdPresentInDom(id) {
    return document.getElementById(id);
}
