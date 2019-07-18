
// alert($('#h1').text());

 $('#btn').click( function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var fullName = firstName+' '+lastName;
    $('#fullName').val(fullName);
 });