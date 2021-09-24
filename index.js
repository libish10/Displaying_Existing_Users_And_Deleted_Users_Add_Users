function Validate(event) {
    alert("hai");



}
DisplayUser()

function DisplayUser() {
    let url = "http://3.6.93.159:7883/machstatz/get_all_users";

    fetch(url)
        .then((response) => response.json())
        .then((json) => DisplayUsersList(json))
        .catch((err) => console.log("error", err));

    return false;
}

function DisplayUsersList(data) {
    console.log(data)
    if (data) {
        var Result = "";
        data.map((user) => {
            let fname = user.first_name ? user.first_name : user.fist_name;

            let lname = (user.last_name)
            Result += "<div class='user_details'><p class='first_letter'>" + lname + "</p></div>";
            //Result += "<div class='user_details'><p class='first_letter'>" + fname.substr(0, 1) + "</p><p>" + " " + fname + " " + lname + "</p></div>";
        })
        document.getElementById("displayingExistingUser").innerHTML = Result;
    }
}