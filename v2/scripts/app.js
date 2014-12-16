$(document).ready(function() {

  var item =  "<li class='item'>" +           // the 'item' <li> to add to the DOM
              "<input type='checkbox'>" +
              "<input type='text' value='%data%' disabled='disabled'>" +
              "<input type='number' min='1' value='%qty%' disabled='disabled'>" +
              "<input type='button' value='Edit'>" +
              "<input type='button' value='Delete'>" +
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
    } else { // no text was entered into the text field
      alert("Nothing to add!");
    }

    itemToAdd.focus();

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

});