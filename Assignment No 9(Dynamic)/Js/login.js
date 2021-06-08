
document.querySelector('#btn').addEventListener('click', function () {
    var username = document.querySelector('#usernamee').value;
    var password = document.querySelector('#password').value;
    { event.preventDefault(); }
    if (username == "") {
        document.querySelector('#usernamee').style.borderColor = "red";
        document.querySelector('#text-1').innerHTML = "Please Enter Your Email";
    }
    else if (username != "") {
        document.querySelector('#usernamee').style.borderColor = "";
        document.querySelector('#text-1').innerHTML = "";


    }
    if (password == "") {
        document.querySelector('#password').style.borderColor = "red";
        document.querySelector('#text-2').innerHTML = "Please Enter Your Password";
    }
    else if (password != "") {
        document.querySelector('#password').style.borderColor = "";
        document.querySelector('#text-2').innerHTML = "";


    }
});