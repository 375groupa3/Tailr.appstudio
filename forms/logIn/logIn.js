
let user_id = ""

btnSignin.onclick=function(){
  let username = inptUsername.value
  let password = inptPassword.value
  var query = "SELECT * FROM `user` WHERE user_name =" + '"' + username + '"'  
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=375groupa3&query=" + query);
  if (req1.status == 200) { //transit worked.
    results = JSON.parse(req1.responseText)
    console.log(results) // this shows the array of arrays  
    if (inptPassword.value == results[0][2]) {
          user_id = results[0][0]
          
            query = "SELECT profile_id FROM `profile` WHERE user_id =" + '"' + user_id + '"'  
            console.log(query)
            req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query)

            if (req1.status == 200) { //transit worked.
                allUserData = JSON.parse(req1.responseText)
                console.log("parsed result in onshow:  " + allUserData[0])
                if (allUserData[0] > 0) {
                    ChangeForm(home)
                } else {
                    ChangeForm(create_profile)
                }
                
            } else {
            // transit error
            NSB.MsgBox("Error: " + req1.status);
            }  
        } else 
          ErrorMsg.value = ("The username or password is incorrect.")
  }else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}

CreateAccount.onclick=function(){
    ChangeForm(signUp)
}
