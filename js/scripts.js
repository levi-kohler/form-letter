$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#letter").show();

    event.preventDefault();
  });
});