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
        .then((json) => {
            console.log(json)
            window.location.href = "./index.html";
        });



}