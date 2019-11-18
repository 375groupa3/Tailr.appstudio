
btnSignUp.onclick=function(){
  ChangeForm(signUp)
}
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
          ChangeForm(create_profile)
      } else 
          NSB.MsgBox("The username or password is incorrect")
  }else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}




