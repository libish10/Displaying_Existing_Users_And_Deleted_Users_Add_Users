function formFieldValidation(fieldname) {

    let fieldNameSel = document.getElementById(fieldname);
    let fieldName = fieldNameSel.value;
    var vaildname = fieldName.match(/\d+/g);
    if (
        vaildname == null &&
        ([fieldName >= "A" && fieldName <= "Z"] || [
            fieldName >= "a" && fieldName <= "z",
        ])
    ) {
        fieldNameSel.style.border = "3px solid green";
    } else {
        fieldNameSel.style.border = "3px solid red";
    }
}

function formFieldUserNameValidation(fieldname) {

    let fieldNameSel = document.getElementById(fieldname);
    let fieldName = fieldNameSel.value;
    var vaildname = fieldName.match(/\d+/g);
    if (
        vaildname == null ||
        ([fieldName >= "A" && fieldName <= "Z"] || [
            fieldName >= "a" && fieldName <= "z",
        ])
    ) {
        fieldNameSel.style.border = "3px solid green";
    } else {
        fieldNameSel.style.border = "3px solid red";
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
    if (passWord.length > 6) {
        document.getElementById("passWord").style.border = "3px solid green";
    } else {
        document.getElementById("passWord").style.border = "3px solid red";
    }
}