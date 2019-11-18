

hmbSettings.onclick=function(){
  var click = hmbSettings.selection
  switch (click) {
  case "Log out":
    ChangeForm(logIn);
    break;
  case "Edit settings":
    ChangeForm(settings);
    break;
  case "Add account":
    ChangeForm(logIn);
  }
}

profile.onshow=function(){
var query = "SELECT * FROM `profile` WHERE user_id =" + '"' + user_id + '"'  
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=375groupa3&query=" + query);
  if (req1.status == 200) { //transit worked.
  results = JSON.parse(req1.responseText)
    console.log(results) // this shows the array of arrays  
    lblName.value = results[0][2]
    imgProfilePic.src = results[0][1]
    }
}
