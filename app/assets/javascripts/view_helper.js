function getCSRFToken() {
    return document.querySelector('meta[name="csrf-token"]').getAttribute("content");
}

function isIdPresentInDom(id) {
    return document.getElementById(id);
}

$( document ).ready(function() {
  // helper to close flash messages
  $('.message .close').on('click', function() {
    $(this).closest('.message').hide();
  });
});
