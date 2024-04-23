// submit button
$(document).ready(function(){
    
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const phonePattern = /^\d{3}\d{3}\d{4}$|^\d{3}\d{3}\d{4}$/;

    $("#email").focus();

    $("#register").submit(
        function(event){
            var isValid = true;
            // validate if the email is correct
            var email = $("#email").val().trim();
            if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email);
            // validate if the phone number is correct
            var phone = $("#phone").val().trim();
            if (phone == "") { 
				$("#phone").next().text("This field is required.");
				isValid = false; 
			} else if (!phonePattern.test(phone)){
                $("#phone").next().text("Use 999-999-9999 format");
            isValid = false;
            }
             else {
				$("#phone").next().text("");
			}
			$("#phone").val(phone);
            // prevent the submission of the form if any entries are invalid
            if (isValid == false) {
                alert("You must complete the form correctly in order.") 
                event.preventDefault();            
            }
            // validate the first name entry
            const Name = $("#data[Name]").val().trim();
            if (Name == "") {
                $("#data[Name]").next().text("This field is required.");
                isValid = false;
            } else {
                $("#data[Name]").next().text("");
            }
            $("#data[Name]").val(Name);

        }
    )
    //this uses the fetch to transfers the data coming in from the html form to google sheets
    //here is the googlesheets link so you can check that the data is being transfered correctly
    //https://docs.google.com/spreadsheets/d/1ESsArU7CP-nRmmf57nUwfMzltU2DQT6-UcQp6DZ70h8/edit#gid=0
    const form = document.getElementById('register');
    form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("register")),
    }).then(
        response => response.json()
    ).then((html) => {
      // you can put any JS code here
      window.location.href = 'https://webpages.charlotte.edu/jlobo1/InteractiveWebsite/RegistrationComplete.html';
      alert('success');
    });
  });

});

//look at reservation.js from form vadiation demo activity


