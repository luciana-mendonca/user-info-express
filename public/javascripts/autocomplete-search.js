$("#user-input").keyup(function() {
    var userInput = $(this).val();
    $("#sugestions").empty();
    $.post('/autocomplete', {userInput:userInput}, function (response, status) {
      for (var i = 0; i < response.length; i++) {
        $("#sugestions").append("<option value='" + response[i].firstname + " " + response[i].lastname + "'></option>")
      }
    });
});
