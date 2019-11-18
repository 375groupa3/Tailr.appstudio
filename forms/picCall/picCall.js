picCall.onshow=function(){
  var callQuery = "SELECT picture FROM picture WHERE picture_id = 18;"
  req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery)
  if (req3.status == 200) {
    resultCall = JSON.parse(req3.responseText)
    var callBlob = resultCall[0][0] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    console.log(callBlob)
    picArray = callBlob.split(".")
    picBack.src = picArray[0]
    var lastIDquery = "SELECT MAX(picture_id) FROM picture"
    req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + lastIDquery)
     if (req4.status == 200) {
      lastID = JSON.parse(req4.responseText)
    } else {
      alert("you have failed" + req4.status)
    }
    } else {
      //Handle that. 
      alert("Error: " + req3.status)
    }
}
