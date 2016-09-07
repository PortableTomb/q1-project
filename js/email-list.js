//FORM VALIDATION


var $email = $('#myForm');

          $('#submitButton').on('click', function(event) {

                  if ($email.val().trim() === '') {
                    Materialize.toast('Please add a valid email address.', 2000);
                    return;
                  }
                  event.preventDefault();

          });
