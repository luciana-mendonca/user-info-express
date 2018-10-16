$("#user-input").keyup(function() {
    var userInput = $(this).val();
    $("#sugestions").empty();
    $.post('/autocomplete', {userInput:userInput}, function (response, status) {
        console.log(status)
        console.log(response);
        for (var i = 0; i < response.length; i++) {
          $("#sugestions").append("<p>" + response[i].firstname + " " + response[i].lastname + " Email: " + response[i].email + "</p>")
        }
    });
});
