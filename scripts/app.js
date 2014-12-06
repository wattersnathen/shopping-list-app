$(document).ready(function(){

  var listItem = "<li class='item'>" +
                 "<input type='checkbox' name='checkbox'>" +
                 "<input type='text' value='%data%'>" +
                 "<input type='number' min='1' value='%qty%'>" +
                 "<input type='button' value='Edit' name='btn-edit'>" +
                 "<input type='button' value='Delete' name='btn-delete'>" +
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
      alert("Nothing to add");
    }
    item.focus();
  }

  function areListsEmpty() {
    if ($("#purchased li").length === 0) {
      $("#items-purchased").hide();
    } else {
      $("#items-purchased").show();
    }

    $("#items-to-purchase").show();

    if ($("#items li").length != 0) {
      $("#items-to-purchase").show();
    } else {
      $("#items-to-purchase").hide();
    }
  }

  $("#add-button").click(function() {
    addItemToList($("#entered-text"), $("#entered-quantity"), itemsList);
    areListsEmpty();
  });
  
  $("#items, #purchased")
    .on("click", "input[name='btn-delete']", function() {
      $(this).closest("li").remove();
      areListsEmpty();
  })
    .on("click", "input[name='checkbox']", function() {
      var item = $(this).closest("li");
      
      if (item.closest("ul").attr("id") === "items") {
        $("#purchased").append(item);  

      } else if (item.closest("ul").attr("id") === "purchased") {
        $("#items").append(item);
      }
      areListsEmpty();
  });

});