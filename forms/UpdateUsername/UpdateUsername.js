newUsername = ""

UpdateUsername.onshow=function(){
    let query = "SELECT user_name FROM `user` WHERE user_id =" + '"' + user_id + '"'  
    console.log(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query)

    if (req1.status == 200) { //transit worked.
            allUserData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allUserData)
            NewUsername.value = allUserData
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}



BackBtn.onclick=function(){
  ChangeForm(profile)
}

UpdateBtn.onclick=function(){
    let newUsername = NewUsername.value
    
    var query = "UPDATE user SET user_name =" + '"' + newUsername + '"' + " WHERE user_id =" + '"' + user_id + '"'  
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
}
