$(document).ready(function() {
  
  var itemToAdd = $("#enter-item");

  $("#add-item-button").click(function() {
    addItemToList(itemToAdd);
  });

  $("#enter-item").keypress(function(event) {
    if (event.which === 13) {
      addItemToList(itemToAdd);
    }
  });

  function addItemToList(item) {
    if (item.val()) {
      $("#error-message").hide();
      var html = "<li><input type='text' value='" + item.val() + "'><button>edit</button><button>delete</button></li>";
      $("#item-list ul").append(html);
      item.val("");
    } else {
      $("#error-message").show();
    }
    item.focus();
  }

});