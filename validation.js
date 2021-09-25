function firstNameValidate() {
    let fName = document.getElementById("fName").value;
    var vaildFname = fName.match(/\d+/g);
    if (fName == "") {
        document.getElementById("fName").style.border = "3px solid red";
    } else if (vaildFname != null) {
        document.getElementById("fName").style.border = "3px solid red";
    } else if ((vaildFname == null) && ([fName >= "A" && fName <= "Z"] || [fName >= "a" && fName <= "z"])) {
        document.getElementById("fName").style.border = "3px solid green";
    } else {
        document.getElementById("fName").style.border = "3px solid red";
    }
}

function lastNameValidate() {
    let LName = document.getElementById("lName").value;
    var vaildLname = LName.match(/\d+/g);
    if (LName == "") {
        document.getElementById("lName").style.border = "3px solid red";
    } else if (vaildLname != null) {
        document.getElementById("lName").style.border = "3px solid red";
    } else if ((vaildLname == null) && ([lName >= "A" && lName <= "Z"] || [lName >= "a" && lName <= "z"])) {
        document.getElementById("lName").style.border = "3px solid green";
    } else {
        document.getElementById("lName").style.border = "3px solid red";
    }
}

function userNameValidate() {
    let UName = document.getElementById("uName").value;
    var vaildUname = UName.match(/\d+/g);
    if (UName == "") {
        document.getElementById("uName").style.border = "3px solid red";

    } else if ((vaildUname == null) || ([UName >= "A" && UName <= "Z"] || [UName >= "a" && UName <= "z"])) {
        document.getElementById("uName").style.border = "3px solid green";
    } else {
        document.getElementById("uName").style.border = "3px solid red";
    }
}


function emailValidate() {
    email = document.getElementById("eMail").value;
    var dotPos = email.lastIndexOf(".");
    var atPos = email.indexOf("@");
    var includesItem = "/[^A-Za-z0-9<>()\[\]\\.,;:\~!#$%^&*_-+={}|<>?]/"
    if (email == " ") {
        document.getElementById("eMail").style.border = "3px solid red";

    } else if ((dotPos - atPos) < 2 && atPos < 1) {

        document.getElementById("eMail").style.border = "3px solid red";

    } else if ((atPos > 2) && (dotPos - atPos) > 2 && ([email.substring(0, atPos).match(includesItem)] || [email.substring(atPos + 1, dotPos).match(includesItem)] || email.substring(dotPos + 1).match["/A-za-z0-9/"])) {

        document.getElementById("eMail").style.border = "3px solid green";

    } else {

        document.getElementById("eMail").style.border = "3px solid red";

    }
}

function passwordValidate() {
    passWord = document.getElementById("passWord").value;
    if (passWord == " ") {
        document.getElementById("passWord").style.border = "3px solid red";
    } else if (passWord.length < 6) {
        document.getElementById("passWord").style.border = "3px solid red";
    } else {
        document.getElementById("passWord").style.border = "3px solid green";
    }
}