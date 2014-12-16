$(document).ready(function() {

  var item =  "<li class='item'>" +           // the 'item' <li> to add to the DOM
              "<input type='checkbox'>" +
              "<input type='text' value='%data%' disabled='disabled'>" +
              "<input type='number' min='1' value='%qty%' disabled='disabled'>" +
              "<input type='button' value='Edit' class='btn-edit'>" +
              "<input type='button' value='Delete' class='btn-delete'>" +
              "</li>",
      itemsOnList = $("#items-to-purchase"),  // list of items yet to be purchased (not checked off)
      purchasedList = $("#items-purchased");  // list of items already purchased (checked off)

  // Add item to itemsOnList when +Add is clicked...
  $("#add-button").on("click", function addItemOnClick() {
    var itemToAdd = $("#entered-item-text"),
        itemQty   = $("#entered-item-quantity"),
        trimedItem= itemToAdd.val().trim(),
        trimedQty = itemQty.val();

    if (trimedItem) {
      itemsOnList.append(item.replace("%data%", trimedItem).replace("%qty%", trimedQty));
      
      // clear out the data in the entered item fields
      itemToAdd.val("");
      itemQty.val("1");
    } else { // no text was entered into the text field, show error message
      $("#no-item-entered-error").show().delay(1800).fadeOut(900); // don't leave error on screen for long
    }

    itemToAdd.focus(); // return focus to the enter item text field for quicker entries

  }); // end of #add-button click handler


  // Add item to purchased list when checkbox is clicked
  $(".items").on("click", "input[type='checkbox']", function changeList() {
    var item = $(this).closest("li"),
        listID = item.closest("ul").attr("id");

    if(listID === "items-purchased") {
      $("#items-to-purchase").append(item);

    } else if (listID === "items-to-purchase") {
      $("#items-purchased").append(item);
    }
  });

  // Remove 'item' from DOM when delete button is clicked
  $(".items").on("click", ".btn-delete", function removeItemFromDOM() {
    $(this).closest("li").remove();
  });

  // Enabled list inputs when edit button is clicked. 
  $(".items").on("click", ".btn-edit", function enableInputs() {
    var input = $(this).closest("li"),
        textField = input.find("input[type='text']"),
        qtyField  = input.find("input[type='number']");

    if (textField.attr("disabled")) {
      textField.removeAttr("disabled");
    } else {
      textField.attr("disabled", "disabled");
    }

    if (qtyField.attr("disabled")) {
      qtyField.removeAttr("disabled");
    } else {
      qtyField.attr("disabled", "disabled");
    }
  });

  // Use jQuery-UI sortable to enable drag and drop between the two lists
  $(".items").sortable({
    cursor: "move",
    opacity: 0.6,
    connectWith: ".items",
    update: function changeCheckbox(event, ui) {
      ensureCheckboxStatesAreValid();
    }
  });

  function ensureCheckboxStatesAreValid() {
    $.each(itemsOnList, function(idx, value) {
      $(this).find("input[type='checkbox']").prop("checked", false);
    });

    $.each(purchasedList, function(idx, value) {
      $(this).find("input[type='checkbox']").prop("checked", true);
    });
  }

  // localStorage, saving the list(s) on the client
  function supportsLocalStorage() {
    // check for localStorage
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }
});