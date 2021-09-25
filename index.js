
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
           
            Result += `<div class='grid-item'><p  class="grid-items-name">${fname} ${lname}</p><i class="fas fa-pencil-alt"></i><i class="fas fa-trash-alt" onclick='RemoveUser("${user.email}")'></i></div>`
        })
        document.getElementById("displayingExistingUser").innerHTML = Result;
    }
}

function RemoveUser(emailId) {
    console.log(emailId);
    let dataObj = { email: emailId };
    let url = "http://3.6.93.159:7883/machstatz/delete_existing_user";
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
          let   fname=`"${document.getElementById("fName").value}"`;
          let   lname=`"${document.getElementById("lName").value}"`;
          let   Uname=`"${document.getElementById("uName").value}"`;
          let   emailId=`"${document.getElementById("eMail").value}"`;
          let   password=`"${document.getElementById("passWord").value}"`;
          console.log(fname);
          console.log(lname);
          console.log(Uname);
          console.log(emailId);
          console.log(passWord);
          let headers=new Headers();
              headers.append('Access-Control-Allow-Origin', "http://3.6.93.159:7883/machstatz/add_new_user");
               headers.append('Access-Control-Allow-Credentials', 'true');
          let url="http://3.6.93.159:7883/machstatz/add_new_user";
          fetch(url,{
              method:"POST",
              body: JSON.stringify({
                    email:  emailId,
                    fist_name: fname,
                    last_name: lname,
                    pwd: passWord,
                    username: Uname,
                }),
               
          })
           .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((message)=>console.log("message : ",message));

    return false;
}