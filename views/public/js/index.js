console.log("Connected to File");

$(document).on("click", "#makenew", function() {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      exchange: $("#exchange").val(),
      address: $("#address").val(),
      currency: $("#currency").val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, add the title and a delete button for the note to the page
  .done(function(data) {
    console.log(data);
    // Add the title and delete button to the #results section
    $("#results").prepend("<p class='dataentry' data-id=" + data._id + "><span class='dataTitle' data-id=" +
      data._id + ">" + data.exchange + "</span>" + "<span>" +data.address+ "</span> <span class=deleter>X</span></p>");
    // Clear the note and title inputs on the page
    $("#exchange").val("");
    $("#address").val("");
    $("#currency").val("");
  });
});



// When user clicks the deleter button for a note
$(document).on("click", ".deleter", function() {
  // Save the p tag that encloses the button
  var selected = $(this).parent();
  // Make an AJAX GET request to delete the specific note
  // this uses the data-id of the p-tag, which is linked to the specific note
  $.ajax({
    type: "GET",
    url: "/delete/" + selected.attr("data-id"),

    // On successful call
    success: function(response) {
      // Remove the p-tag from the DOM
      selected.remove();
      // Clear the note and title inputs
      $("#address").val("");
      $("#exchange").val("");
      // Make sure the #actionbutton is submit (in case it's update)
      $("#actionbutton").html("<button id='makenew'>Submit</button>");
    }
  });
});