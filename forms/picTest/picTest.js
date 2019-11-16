
var picBase64 = ""
var pic1 = "";
var userData = ''
var test = "test"

reader = new FileReader();

txtGetPic.onchange=function(){
  reader.readAsDataURL(txtGetPic.files[0]);
};

reader.onload = function(e) {
     //read of the file is complete.
     //Now, let's load it into an image.
     //The _onload function for the image will be called on completion.
  picUp.src = e.target.result; //Phone Viewing ONLY
  picBase64 = e.target.result;
  return;
};

savePic.onclick=function(){
  var query = "INSERT INTO picture (picture) VALUES (" + '"' + picBase64 + '")'
  console.log(picBase64)
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + query)
  if (req1.status == 200) {
    alert("success" +req1.responseText)
  } else {
    alert("You have failed" +  req1.status)
  }
}

btnCallPic.onclick=function(){
  var callQuery = "SELECT picture FROM picture WHERE picture_id = 16;"
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery)
  if (req2.status == 200) {
    resultCall = JSON.parse(req2.responseText)
    var callBlob = resultCall[0][0] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    console.log(callBlob)
    picArray = callBlob.split(".")
    picBack.src = picArray[0]
    } else {
      //Handle that. 
      alert("Error: " + req1.status)
    }
}
