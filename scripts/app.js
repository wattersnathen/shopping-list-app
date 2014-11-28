$(document).ready(function() {
  $("#add-item-button").click(function() {
    var itemEntered = $("#enter-item").val();
    var itemList = $("#item-list ul");
    
    // Check if itemEntered has a value,
    // empty strings are treated as false
    if (itemEntered) {
      $("#error-message").hide();
      
    } else {
      $("#error-message").show();
    }
  });
});
