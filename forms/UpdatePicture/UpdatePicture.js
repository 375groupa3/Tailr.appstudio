
BackBtn1.onclick=function(){
  ChangeForm(profile)
}

reader2 = new FileReader();

chooseFile.onchange=function(){
    reader2.readAsDataURL(chooseFile.files[0]);  
}

reader2.onload = function(e) {
     //read of the file is complete.
     //Now, let's load it into an image.
     //The _onload function for the image will be called on completion.
  profilePicture.src = e.target.result; //Phone Viewing ONLY
  picBase64 = e.target.result;
  return;
}

UpdateBtn1.onclick=function(){
    query = "UPDATE profile SET profile_picture =" + '"' + picBase64 + '"' + " WHERE user_id =" + '"' + user_id + '"'  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query);
    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
        } 
        StatusTxt2.value = "You changed your profile picture."
        StatusTxt2.fadeOut(5000)
        
        callQuery = "SELECT * FROM `profile` WHERE user_id =" + '"' + user_id + '"'
        req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery)
        if (req3.status == 200) {
            resultCall = JSON.parse(req3.responseText)
            lblName.value = ("Welcome back " + resultCall[0][2] + "!")
            var callBlob = resultCall[0][1] + '.'
            callBlob = callBlob.replace(/\s/gi, '+')
            picArray = callBlob.split(".")
            profilePicture.src = picArray[0]
            
            } else{
                profilePicture.src = ''
        }
    
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}

UpdatePicture.onshow=function(){
    StatusTxt2.value = ""
    
    callQuery = "SELECT * FROM `profile` WHERE user_id =" + '"' + user_id + '"'
  req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery)
  if (req3.status == 200) {
    resultCall = JSON.parse(req3.responseText)
    lblName.value = ("Welcome back " + resultCall[0][2] + "!")
    var callBlob = resultCall[0][1] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    picArray = callBlob.split(".")
    profilePicture.src = picArray[0]
    }
  else{
    profilePicture.src = ''
    }
}
