hmbSettings.onclick=function(){
  var click = hmbSettings.selection
  switch (click) {
  case "Log out":
    ChangeForm(logIn);
    break;
  case "Edit Profile":
    ChangeForm(settings);
    break;
  case "Add Account":
    ChangeForm(signUp);
    break;
  case "Update Username":
    ChangeForm(UpdateUsername);
    break;
  case "Home":
    ChangeForm(home);
    break;
  case "Change Password":
    ChangeForm(UpdatePassword);
    break;
  case "Update Profile Picture":
    ChangeForm(UpdatePicture);
    break;
  }
}

profile.onshow=function(){
  var callQuery = "SELECT * FROM `profile` WHERE user_id =" + '"' + user_id + '"'
  req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery)
  if (req3.status == 200) {
    resultCall = JSON.parse(req3.responseText)
    lblName.value = ("Welcome back " + resultCall[0][2] + "!")
    var callBlob = resultCall[0][1] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    console.log(callBlob)
    picArray = callBlob.split(".")
    imgProfilePic.src = picArray[0]
    }
  else{
    imgProfilePic.src = ''
    }
}

btnUpload.onclick=function(){
  ChangeForm(picUpload)
}
