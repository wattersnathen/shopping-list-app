$(document).ready(function(){

  var listItem = "<li class='item'>" +
                 "<input type='checkbox'>" +
                 "<input type='text' value='%data%'>" +
                 "<input type='number' min='1' value='%qty%'>" +
                 "<input type='button' value='Edit' class='button-edit'>" +
                 "<input type='button' value='Delete' class='button-delete'>" +
                 "</li>",
      itemsList = $("#items"),          // list of items currently left to purchase
      purchasedList = $("#purchased");  // list of items that have been purchased

  function addItemToList(item, quantity, list) {
    var _item = item.val().trim(),
        _qty  = quantity.val();
    if(_item) {
      list.append(listItem.replace("%data%", _item)
                          .replace("%qty%", _qty));
      item.val("");
      quantity.val("1");
    } else {
      alert("nothing to add");
    }
    item.focus();
  }

  $("#add-button").click(function() {
    addItemToList($("#entered-text"), $("#entered-quantity"), itemsList);
  });

});