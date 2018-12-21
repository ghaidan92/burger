$(function() {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = $("#ca").val().trim();
        
      // Send the PUT request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: {burger: newBurger}
      }).then(
        function() {
          console.log("Created New burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});