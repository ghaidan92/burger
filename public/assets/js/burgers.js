$(function() {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
            burger_name: $("#ca").val().trim()
        }
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

    $(".change-form").on("click", function(event) {
        var id = $(this).data("id");
        // var newState = $(this).data("devoured");
    
        var newState = {
            devoured: true,
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function(res) {
            // console.log(res);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
});