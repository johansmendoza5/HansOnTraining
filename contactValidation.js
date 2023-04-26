 /*************************
   
    Project 4 Website
	Name: Johans Mendoza
	Date: April 25, 2023
	Description: JavaScript for the contacts pages to enable errors.

***************************/

/*
 * Handles the submit event customer information
 *
 * param e A reference to the event object
 * return True if no validation errors; false if the form has validation error
 */
function validate(e){
    // Hides all error elements
    hideErrors()

    // Determine if the form has error
    if (formHasErrors()){
        // Prevents the form rom submitting
        e.preventDefault()

        // When onSubmitting="validate()" in markup, return false would prevent
        // the from from submitting
        return false;
    }

    // When using onSubmit="validate()" in markup, returning true would allow
    // the form to submit
    return true;
}

/*
 * Does the error checking
 *
 * return True if an error was found; false if no errors were found
 */
function formHasErrors(){
    // Determining if any field have errors
    let errorFound = false;

    // Check name field
    if (document.getElementById("name").value == ""){
        document.getElementById("name_error").style.display = "block";

        errorFound = true;
        document.getElementById("name").focus();
    }

    // Check phone field
    let phonePattern = /^\d{10}$/;
    let phoneInput = document.getElementById("phone").value;
    if (phoneInput.length < 1){
        document.getElementById("phone_error").style.display = "block";
        errorFound = true;
        document.getElementById("phone").focus();
    }
    else if (phoneInput.length < 10){
        document.getElementById("invalidPhone_error").style.display = "block";
        errorFound = true;
        document.getElementById("phone").focus();
    }
    else if (!phonePattern.test(phoneInput)){
        document.getElementById("phone_error").style.display = "block";
        errorFound = true;
        document.getElementById("phone").focus();
    }

    // Check email field
    const email = document.getElementById("email").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length < 1){
        document.getElementById("email_error").style.display = "block";
        errorFound = true;
        document.getElementById("email").focus();
    }
    else if(!emailPattern.test(email)){
        document.getElementById("invalidEmail_error").style.display = "block";
        errorFound = true;
        document.getElementById("email").focus();
    }

    return errorFound;
}


function resetForm(){
    hideErrors();
}

/*
 * Hides all the error elements
 */
function hideErrors(){
    // Get an array of error elements
    let error = document.getElementsByClassName("form error");

    // Loop through the error array to hide any errors
    for (let i = 0; i < error.length; i++){
        // Hide the error element by changing display style to none
        error[i].style.display = "none";
    }
}

/*
 * Handles the load event of the document.
 */
function load(){
    // Add event listeners
    document.getElementById("submit").addEventListener("click", validate);

    document.getElementById("reset").addEventListener("click", resetForm);
}

// Add document load event listeners
document.addEventListener("DOMContentLoaded", load)