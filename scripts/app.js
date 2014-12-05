$(document).ready(function(){

  var listItem = "<li class='item'>" +
                 "<input type='checkbox'>" +
                 "<input type='text' value='%data%'>" +
                 "<input type='number' min='1'>" +
                 "<input type='button' value='Edit'>" +
                 "<input type='button' value='Delete'>" +
                 "</li>",
      itemsList = $("#items"),          // list of items currently left to purchase
      purchasedList = $("#purchased");  // list of items that have been purchased

  function addItemToList(item, list) {
    var itemValue = item.val().trim();
    if (itemValue) {
      list.append(listItem.replace("%data%", itemValue));
      item.val("");
    } else {
      alert("nothing to add");
    }
    item.focus();
  }

  $("#add-button").click(function() {
    addItemToList($("#enter-item input[type='text']"), itemsList);
  });

});