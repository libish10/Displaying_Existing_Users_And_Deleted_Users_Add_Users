# Displaying_Existing_Users_And_Deleted_Users_Add_Userslet   fname=`"${document.getElementById("fName").value}"`;
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