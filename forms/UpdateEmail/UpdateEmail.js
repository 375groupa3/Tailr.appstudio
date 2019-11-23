newEmail = ""

BackBtn4.onclick=function(){
  ChangeForm(settings)
}

UpdateEmail.onshow=function(){
    query = "SELECT email FROM `profile` WHERE user_id =" + '"' + user_id + '"'  
    console.log(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query)

    if (req1.status == 200) { //transit worked.
            allUserData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allUserData)
            CurrentEmail.value = "Current username : " + allUserData
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}

UpdateBtn4.onclick=function(){
    newEmail = NewEmail.value
    
    var query = "UPDATE profile SET email =" + '"' + newEmail + '"' + " WHERE user_id =" + '"' + user_id + '"'  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query);

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
            var result = JSON.parse(req1.responseText)
            CurrentEmail.value = "You have updated your email to " + newEmail + "."
        } else
            NSB.MsgBox("There was a problem changing the customer's name.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}
