newbirthMonth = ""
newbirthDay = ""
newbirthYear = ""
newbirthDate = ""

UpdateBirthDate.onshow=function(){
    let query = "SELECT birth_date FROM `profile` WHERE user_id = 3"  
    console.log(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query)

    if (req1.status == 200) { //transit worked.
            allUserData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allUserData)
            CurrentDOB.value = "Current birthdate : " + allUserData
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}


BackBtn3.onclick=function(){
    ChangeForm(settings)
}

UpdateBtn3.onclick=function(){
    newbirthMonth = NewMonth.value
    newbirthDay = NewDay.value
    newbirthYear = NewYear.value
    
    //convert DOB into correct format for SQL database
    newbirthDate = newbirthYear + "-" +newbirthMonth + "-" + newbirthDay
    
    var query = "UPDATE profile SET birth_date =" + '"' + newbirthDate + '"' + " WHERE user_id = 3" 
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query);

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
            var result = JSON.parse(req1.responseText)
            CurrentDOB.value = "You have updated your birthdate to " + newbirthDate + "."
        } else
            NSB.MsgBox("There was a problem changing the customer's name.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}

NewDay.onclick=function(s){
      if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    NewDay.value = s   // make dropdown show choice user made
  }
}

NewMonth.onclick=function(s){
    if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    NewMonth.value = s   // make dropdown show choice user made
  }
}

NewYear.onclick=function(s){
    if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    NewYear.value = s   // make dropdown show choice user made
  }
}
