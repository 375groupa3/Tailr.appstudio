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
  case "Upload a New Picture":
    ChangeForm(picUpload);
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
  var whiteQuery = "SELECT picture FROM picture WHERE picture_id = 1"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + whiteQuery)
  whiteArray = JSON.parse(req1.responseText)
  var whiteBlob = whiteArray[0][0] + '.'
  whiteBlob = whiteBlob.replace(/\s/gi, '+')
  white = whiteBlob.split(".")
  
  var favQuery = "SELECT p.picture from picture p JOIN favorites f ON p.picture_id WHERE p.picture_id = f.picture_id and f.user_id = " + "'" + user_id + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + favQuery)
  if (req.status == 200) {
    favArray = JSON.parse(req.responseText)
    alert(favArray)
    
    if (favArray.length >= 4) {
    var callBlob = favArray[0][0] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    fave1 = callBlob.split(".")
    fav1.src = fave1[0]
    
    var callBlob1 = favArray[1][0] + '.'
    callBlob1 = callBlob1.replace(/\s/gi, '+')
    fave2 = callBlob1.split(".")
    fav2.src = fave2[0]
    
    var callBlob2 = favArray[2][0] + '.'
    callBlob2 = callBlob2.replace(/\s/gi, '+')
    fave3 = callBlob2.split(".")
    fav3.src = fave3[0]
    
    var callBlob3 = favArray[3][0] + '.'
    callBlob3 = callBlob3.replace(/\s/gi, '+')
    fave4 = callBlob3.split(".")
    fav4.src = fave4[0]
  } else if (favArray.length == 3) {
    var callBlob = favArray[0][0] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    fave1 = callBlob.split(".")
    fav1.src = fave1[0]
    
    var callBlob1 = favArray[1][0] + '.'
    callBlob1 = callBlob1.replace(/\s/gi, '+')
    fave2 = callBlob1.split(".")
    fav2.src = fave2[0]
    
    var callBlob2 = favArray[2][0] + '.'
    callBlob2 = callBlob2.replace(/\s/gi, '+')
    fave3 = callBlob2.split(".")
    fav3.src = fave3[0]
    
    fav4.src = white[0]
 
  } else if (favArray.length == 2) {
    var callBlob = favArray[0][0] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    fave1 = callBlob.split(".")
    fav1.src = fave1[0]
    
    var callBlob1 = favArray[1][0] + '.'
    callBlob1 = callBlob1.replace(/\s/gi, '+')
    fave2 = callBlob1.split(".")
    fav2.src = fave2[0]
    
    fav3.src = white[0]
    
    fav4.src = white[0]
    
  } else if (favArray.length == 1) {
    var callBlob = favArray[0][0] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    fave1 = callBlob.split(".")
    fav1.src = fave1[0]
    
    fav2.src = white[0]
    
    fav3.src = white[0]
    
    fav4.src = white[0]
    
  } else {
    fav1.src = white[0]
    fav2.src = white[0]
    fav3.src = white[0]
    fav4.src = white[0]    
    }
  }
}


/*
fav1.onclick=function(){
  var favQuery = "SELECT p.picture from picture p JOIN favorites f ON p.picture_id WHERE p.picture_id = f.picture_id and f.user_id = " + "'" + user_id + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + favQuery)
  if (req.status == 200) {
    favArray = JSON.parse(req.responseText)
    alert(favArray[3][0])
    var callBlob = favArray[0][0] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    fave1 = callBlob.split(".")
    fav1.src = fave1[0]
    
    var callBlob1 = favArray[1][0] + '.'
    callBlob1 = callBlob1.replace(/\s/gi, '+')
    fave2 = callBlob1.split(".")
    fav2.src = fave2[0]
    
    var callBlob2 = favArray[2][0] + '.'
    callBlob2 = callBlob2.replace(/\s/gi, '+')
    fave3 = callBlob2.split(".")
    fav3.src = fave3[0]
    
    var callBlob3 = favArray[3][0] + '.'
    callBlob3 = callBlob3.replace(/\s/gi, '+')
    fave4 = callBlob3.split(".")
    fav4.src = fave4[0]
  }
}
*/
/*
  randomPicID2 = picIDArray[1]
  var callQuery2 = "SELECT picture FROM picture WHERE picture_id =" + randomPicID2 + ";"
  req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery2)
  if (req4.status == 200) {
    resultCall = JSON.parse(req4.responseText)
    var callBlob = resultCall[0][0] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    //console.log(callBlob)
    picArray = callBlob.split(".")
    imgHome2.src = picArray[0]
    } else {
      //Handle that. 
      alert("Error: " + req4.status)
    }
    */
    
    
    /*
       if (favArray.length = 0) {
    fav1.src = white[0]
    fav2.src = white[0]
    fav3.src = white[0]
    fav4.src = white[0]
    */