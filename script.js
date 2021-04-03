function checkInfo(event){

    event.preventDefault();

    var fName = document.forms["form"]["firstname"].value;
    var lName = document.forms["form"]["lastname"].value;
    var email = document.forms["form"]["email"].value;
    var pw = document.forms["form"]["password"].value;

    var mailType = /^[^\s@]+@[^\s@]+$/;

    if(fName == ""){
        document.getElementById("fNameError").style.display = "block";
        document.getElementById("fname").style.backgroundImage = "url('./images/icon-error.svg')";
        document.getElementById("fname").style.border = "2px solid hsl(0, 100%, 74%)";
    }
    else{
        document.getElementById("fNameError").style.display = "none";
        document.getElementById("fname").style.backgroundImage = "none";
        document.getElementById("fname").style.border = "1px solid #ccc";
    }

    if(lName == ""){
        document.getElementById("lNameError").style.display = "block";
        document.getElementById("lname").style.backgroundImage = "url('./images/icon-error.svg')";
        document.getElementById("lname").style.border = "2px solid hsl(0, 100%, 74%)";
    }
    else{
        document.getElementById("lNameError").style.display = "none";
        document.getElementById("lname").style.backgroundImage = "none";
        document.getElementById("lname").style.border = "1px solid #ccc";
    }

    if(!mailType.test(email)){
        document.getElementById("mailError").style.display = "block";
        document.getElementById("mail").style.backgroundImage = "url('./images/icon-error.svg')";
        document.getElementById("mail").style.border = "2px solid hsl(0, 100%, 74%)";
    }
    else{
        document.getElementById("mailError").style.display = "none";
        document.getElementById("mail").style.backgroundImage = "none";
        document.getElementById("mail").style.border = "1px solid #ccc";
    }

    if(pw == ""){
        document.getElementById("passwordError").style.display = "block";
        document.getElementById("pw").style.backgroundImage = "url('./images/icon-error.svg')";
        document.getElementById("pw").style.border = "2px solid hsl(0, 100%, 74%)";
    }
    else{
        document.getElementById("passwordError").style.display = "none";
        document.getElementById("pw").style.backgroundImage = "none";
        document.getElementById("pw").style.border = "1px solid #ccc";
    }


}

let form = document.getElementById("form");
    
form.addEventListener("submit", checkInfo, true);