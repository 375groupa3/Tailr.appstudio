

btnSignUp1.onclick=function(){
  let username = inptCreateUser.value 
  if (inptCreatePass.value == inptVerifyPass.value) {
        let password = inptCreatePass.value
        var query = "INSERT INTO `user` (user_name,password) VALUES ('" + username + "', '" + password + "')"
       
        req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=375groupa3&query=" + query);
        
        if (req1.status == 200) { //transit worked.
            if (req1.responseText == 500) {   // means the insert succeeded
                var result = JSON.parse(req1.responseText)
               
                query3 = "SELECT * FROM `user` WHERE user_name =" + '"' + username + '"'  
                console.log(query3)
                req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query3)

                if (req1.status == 200) { //transit worked.
                    allUserData = JSON.parse(req1.responseText)
                    console.log("parsed result in onshow:  " + allUserData[0])
                    user_id = allUserData[0][0]
                }
               
               
                query2 = "SELECT profile_id FROM `profile` WHERE user_id =" + '"' + user_id + '"'  
                console.log(query2)
                req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query2)

                if (req1.status == 200) { //transit worked.
                    allUserData = JSON.parse(req1.responseText)
                    console.log("parsed result in onshow:  " + allUserData[0])
                    if (allUserData[0] > 0) {
                        ChangeForm(home)
                    } else {
                        ChangeForm(create_profile)
                        }
                    }
                } else
                    NSB.MsgBox("There was a problem with signing you up.")
            } else {
                // transit error
                NSB.MsgBox("Error: " + req1.status);
        }  
    } else {
    Msg2.value = ("Sorry, your passwords don't match");
    }
}


lblCurrentMem.onclick=function(){
  ChangeForm(logIn)
}

lblCurrentMem.onmousemove=function(){
  
}
