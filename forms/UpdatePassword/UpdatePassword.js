newPassword = ""
newPasswordCheck = ""

BackBtn2.onclick=function(){
  ChangeForm(profile)
}

UpdateBtn2.onclick=function(){
    newPassword = NewPassword.value
    newPasswordCheck = NewPassword1.value
    
    if (newPassword == newPasswordCheck) {
    
        var query = "UPDATE user SET password =" + '"' + newPassword + '"' + " WHERE user_id =" + '"' + user_id + '"'
        req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query);

        if (req1.status == 200) { //transit worked.
            if (req1.responseText == 500) {   // means the update succeeded
                var result = JSON.parse(req1.responseText)
                ChangeForm(profile)
            } else
                NSB.MsgBox("There was a problem changing the customer's name.")
        } else {
            // transit error
            NSB.MsgBox("Error: " + req1.status);
        }
    }  else {
        StatusTxt.value = "Your passwords do not match."
        }
}

