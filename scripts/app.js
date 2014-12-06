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

    if ($("#items li").length === 0) {
      $("#items-to-purchase").hide();
    } else {
      $("#items-to-purchase").show();
    }

    // add and remove attributes
    $(".item").each(function(index) {
      $("#purchased input[type='text'], #purchased input[type='number']").attr("disabled", "disabled");
      $("#items input[type='text'], #items input[type='number']").removeAttr("disabled");
    });
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
      var item = $(this).closest("li"),
          id = item.closest("ul").attr("id");
      
      if (id === "items") {
        $("#purchased").append(item);
        
      } else if (id === "purchased") {
        $("#items").append(item);

      }
      areListsEmpty();
  })
    .on("click", "input[name='btn-edit']", function() {
      var input = $(this).closest("li"),
          text = input.find("input[type='text']"),
          number = input.find("input[type='number']");
      if (text.attr("disabled")) {
        text.removeAttr("disabled");
      } else {
        text.attr("disabled", "disabled");
      }

      if (number.attr("disabled")) {
        number.removeAttr("disabled");
      } else {
        number.attr("disabled", "disabled");
      }
    });

});