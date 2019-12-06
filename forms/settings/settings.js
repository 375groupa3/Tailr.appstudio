
settings.onshow=function(){
    query = "SELECT * FROM `profile` WHERE user_id =" + '"' + user_id + '"'  
    console.log(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query)

    if (req1.status == 200) { //transit worked.
            allUserData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allUserData)
            UpdateName.value = allUserData[0][2]
            UpdateBdate.value = allUserData[0][3]
            Email.value = allUserData[0][6]
            Phone.value = allUserData[0][5]
            Gender.value = allUserData[0][4]
            
            var callBlob = resultCall[0][1] + '.'
            callBlob = callBlob.replace(/\s/gi, '+')
            picArray = callBlob.split(".")
            picture.src = picArray[0]
        } else {
                // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}

Back.onclick=function(){
  ChangeForm(profile)
}

Done.onclick=function(){
    query = "UPDATE profile SET first_name = " + '"' + UpdateName.value + '"' + ", birth_date = " + '"' + UpdateBdate.value + '"' + ", gender = " + '"' + Gender.value + '"' + ", phone = " + '"' + Phone.value + '"' + ", email = " + '"' + Email.value + '"' + " WHERE user_id =" + '"' + user_id + '"'  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query);
    
    console.log(query)

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
