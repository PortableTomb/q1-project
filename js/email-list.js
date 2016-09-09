//FORM VALIDATION

// Email Validation function
function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

var $email = $('#email');
var $myform = $('#myForm');
  $('#submitButton').on('click', function(event) {

      if ($email.val().trim() === '' || validateEmail($email) === false) {
          Materialize.toast('Please add a valid email address.', 2000);
          return;
      }
      if (validateEmail($email) === true) {
          Materialize.toast('You\'ve been added to the list!', 2000);
          event.preventDefault();
      }



  });
