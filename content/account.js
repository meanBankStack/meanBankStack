$( document ).ready(function() {
  $("#accountTable").dataTable({
    "ajax": "data.json",
      "columns": [
        {"data": "accountName"},
        {"data": "amount"},
        {"data": "status"}
      ]
  });

  $.getJSON( "data.json", function( json ) {
    var total = 0;
    var accounts = json.data;
    for (var i = 0; i < accounts.length; i++){
        total += parseInt(accounts[ i ].amount);
    }
    $("#accountTotal").html( total );
  });
});
