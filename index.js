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
            let email = user.email;
            let lname = user.last_name;
            let pwd = user.pwd;
            let username = user.username;
            let id = user._id.$oid;
            Result += `<div class='grid-item'><p  class="grid-items-name">${fname} ${lname}</p>
            <i class="fas fa-pencil-alt" onclick='EditUser(("${email}"),("${fname}"),("${lname}"),("${pwd}"),("${username}"),("${id}"))'></i><i class="fas fa-trash-alt" onclick='RemoveUser("${user.email}")'></i></div>`
        })
        document.getElementById("displayingExistingUser").innerHTML = Result;
    }
}

function EditUser(emailId, fName, lName, password, uName, id) {
    console.log(emailId);
    console.log(fName);
    console.log(lName);
    console.log(password);
    console.log(uName);
    console.log(id)
    let dataObj = {
        email: `${emailId}`,
        fist_name: `${fName}`,
        last_name: `${lName}`,
        pwd: `${password}`,
        username: `${uName}`,


    };
    console.log(dataObj)
    document.getElementById("fName").value = dataObj.fist_name;
    document.getElementById("lName").value = dataObj.last_name;
    document.getElementById("uName").value = dataObj.username;
    document.getElementById("eMail").value = dataObj.email;
    document.getElementById("passWord").value = dataObj.pwd;

    DisplayUser();
}

function RemoveUser(emailId) {

    let dataObj = { email: `"${emailId}"` };

    let url = `http://3.6.93.159:7883/machstatz/delete_existing_user`;
    console.log(url)
    fetch(url, {
            method: "DELETE",
            body: JSON.stringify(dataObj),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log("Error : ", err));




}


function AddUser() {
    let fname = document.getElementById("fName").value;
    let lname = document.getElementById("lName").value;
    let Uname = document.getElementById("uName").value;
    let email = document.getElementById("eMail").value;
    let password = document.getElementById("passWord").value;
    let url = "http://3.6.93.159:7883/machstatz/add_new_user";
    fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: `${ email}`,
                fist_name: `${fname}`,
                last_name: `${lname}`,
                pwd: `${password}`,
                username: `${Uname}`,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    DisplayUser();
    return false;



}