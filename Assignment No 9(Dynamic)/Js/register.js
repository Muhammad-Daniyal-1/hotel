document.querySelector("#register").addEventListener('click', validateForm);


function validateForm() {
    { event.preventDefault(); }
    var valfName = document.querySelector('#fName').value;
    var valLName = document.querySelector('#LName').value;
    var valpName = document.querySelector('#pName').value;
    var valCountry = document.querySelector('#Country').value;
    var valaddress = document.querySelector('#address').value;
    var valCity = document.querySelector('#city').value;
    var valZip = document.querySelector('#zip').value;
    var valABT = document.querySelector('#aboutYourSelf').value;
    var valemail = document.querySelector('#email').value;
    var valrEmail = document.querySelector('#rEmail').value;
    var valPass = document.querySelector('#password').value;
    var valConPass = document.querySelector('#conPassword').value;
    var valemail = document.querySelector('#email').value;
    var valemailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



    if (valfName == "") {
        document.querySelector('#fName').style.borderColor = "red";
    } else if (valfName !== "") {
        document.querySelector('#fName').style.borderColor = "";
    }
    if (valLName == "") {
        document.querySelector('#LName').style.borderColor = "red";
    } else if (valLName !== "") {
        document.querySelector('#LName').style.borderColor = "";
    }
    if (valpName == "") {
        document.querySelector('#pName').style.borderColor = "red";
    } else if (valpName !== "") {
        document.querySelector('#pName').style.borderColor = "";
    }
    if (valCountry == "") {
        document.querySelector('#Country').style.borderColor = "red";
    } else if (valCountry !== "") {
        document.querySelector('#Country').style.borderColor = "";
    }
    if (valaddress == "") {
        document.querySelector('#address').style.borderColor = "red";
    } else if (valaddress !== "") {
        document.querySelector('#address').style.borderColor = "";
    }
    if (valCity == "") {
        document.querySelector('#city').style.borderColor = "red";
    } else if (valCity !== "") {
        document.querySelector('#city').style.borderColor = "";
    }
    if (valZip == "") {
        document.querySelector('#zip').style.borderColor = "red";
    } else if (valZip !== "") {
        document.querySelector('#zip').style.borderColor = "";
    }
    if (valABT == "") {
        document.querySelector('#aboutYourSelf').style.borderColor = "red";
    } else if (valABT !== "") {
        document.querySelector('#aboutYourSelf').style.borderColor = "";
    }
    if (valemail.match(valemailPattern)) {
        document.querySelector('#email').style.borderColor = "";
    } else {
        document.querySelector('#email').style.borderColor = "red";

    }
    if (valrEmail.match(valemailPattern)) {
        document.querySelector('#rEmail').style.borderColor = "";
    } else {
        document.querySelector('#rEmail').style.borderColor = "red";
    }
    if (valPass == "") {
        document.querySelector('#password').style.borderColor = "red";
    } else if (valPass !== "") {
        document.querySelector('#password').style.borderColor = "";
    }
    if (valConPass == "") {
        document.querySelector('#conPassword').style.borderColor = "red";
    } else if (valConPass !== "") {
        document.querySelector('#conPassword').style.borderColor = "";
    }
    if (valPass !== valConPass) {
        document.querySelector('#conPassword').style.borderColor = "red";
        document.querySelector('#password').style.borderColor = "red";
        alert("Please Enter Same Passwords")
    } else {
        return true;
    }
}