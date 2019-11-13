
btnSignIn1.onclick=function(){
  ChangeForm(signIn)
}

btnSignUp1.onclick=function(){
  let username = inptCreateUser.value 
  if (inptCreatePass.value == inptVerifyPass.value) {
  let password = inptCreatePass.value
    var query = "INSERT INTO `user` (user_name,password) VALUES ('" + username + "', '" + password + "')"
// alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=375groupa3&query=" + query);
    }
  else {
    NSB.MsgBox("Sorry, your passwords don't match");
    }
    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            var result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully signed up!")
        } else
            NSB.MsgBox("There was a problem with signing you up.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}

