
BackBtn1.onclick=function(){
  ChangeForm(settings)
}

chooseFile.onchange=function(){
    reader.readAsDataURL(ChooseFile.files[0]);  
}

reader = new FileReader();

reader.onload = function(e) {
     //read of the file is complete.
     //Now, let's load it into an image.
     //The _onload function for the image will be called on completion.
  profilePicture.src = e.target.result; //Phone Viewing ONLY
  picBase64 = e.target.result;
  return;
}

UpdateBtn1.onclick=function(){
    query = "UPDATE profile SET profile_picture =" + '"' + picBase64 + '"' + " WHERE user_id = 3"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ajs85167&pass=BIA375&database=375groupa3&query=" + query);

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
            var result = JSON.parse(req1.responseText)
            console.log("worked...")
        } else
            NSB.MsgBox("There was a problem changing the customer's name.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}
