let firstName = ""
let birthMonth = ""
let birthDay = ""
let birthYear = ""
let gender = ""
let phone = ""
let email = ""
let birthDate = ""
let picBase64 = ""
let pic1 = ""
let userData = ' '

reader = new FileReader();

ChooseFile.onchange=function(){
    reader.readAsDataURL(ChooseFile.files[0]);  
}

reader.onload = function(e) {
     //read of the file is complete.
     //Now, let's load it into an image.
     //The _onload function for the image will be called on completion.
  imgProfile.src = e.target.result; //Phone Viewing ONLY
  picBase64 = e.target.result;
  return;
};

CreateProfileBtn.onclick=function(){

    firstName = FirstNameInpt.value 
    birthMonth = BirthMonthDrop.value
    birthDay = BirthDayDrop.value
    birthYear = BirthYearDrop.value
    gender = GenderRBtn.value
    phone = PhoneInpt.value
    email = EmailInpt.value
    
    //convert DOB into correct format for SQL database
    birthDate = birthYear + "-" +birthMonth + "-" + birthDay
    
    //convert radio button index to correct gender word
    if (gender == 0) {
        gender = "male"
    } else {
        gender = "female"
    }
    
    query = "INSERT INTO `profile` (profile_picture,first_name,birth_date,gender,phone,email,user_id) VALUES ('" + picBase64 + "', '" + firstName + "', '" + birthDate + "', '" + gender + "', '" + phone + "', '" + email + "', '" + user_id + "')"
    console.log(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query);
    
    if (req1.status == 200) { //transit worked.
    
        if (req1.responseText == 500) {   // means the insert succeeded

            ChangeForm(profile)
            
        } else
            
            ChangeForm(profile)
            
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
    
}

BirthMonthDrop.onclick=function(s){
    if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    BirthMonthDrop.value = s   // make dropdown show choice user made
  }
}

BirthDayDrop.onclick=function(s){
      if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    BirthDayDrop.value = s   // make dropdown show choice user made
  }
}

BirthYearDrop.onclick=function(s){
      if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    BirthYearDrop.value = s   // make dropdown show choice user made
  }
}

