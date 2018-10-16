var lastCall;
var suggestions = [];
$("#user-input").keyup(function() {
    var userInput = $(this).val();
    if(lastCall === undefined || (Date.now() - lastCall) >= 300 ) {
      $.post('/autocomplete', {userInput:userInput}, function (response, status) {
        suggestions = response;
        lastCall = Date.now();
      });
    }
    $("#suggestions").empty();
    for (var i = 0; i < suggestions.length; i++) {
      $("#suggestions").append("<option value='" + suggestions[i].firstname + " " + suggestions[i].lastname + "'></option>")
    }
});
