var genderFilter = "IS NOT NULL"
var weatherFilter = "IS NOT NULL"
var colorFilter = "IS NOT NULL"
var brandFilter = "IS NOT NULL"
var categoryFilter = "IS NOT NULL"
var picIDArray = ""


weatherArray.push("Current Weather")

/*let genderArray = ["Men's", "Women's", "Unisex"]
let weatherArray = ["Hot","Cold","Rain","Snow", "All-weather", "Current Weather"]
let colorArray = ["White", "Yellow", "Red", "Pink", "Blue", "Green", "Orange", "Purple", "Black", "Other"]
let brandArray = ["Nike","Adidas","Levi","Gucci","Polo Ralph Lauren","Calvin Klein","Aeropostale","Versace","American Eagle","Victoria's Secret", "Other"]
let categoryArray = ["Sport","Formal","Casual","Outdoors", "Other"]
*/

home.onshow=function(){
  drpClothingGenderSelect.clear()
  for (i = 0; i <= genderArray.length - 1; i++)
    drpClothingGenderSelect.addItem(genderArray[i])
  drpWeatherSelect.clear()
  for (i = 0; i <= weatherArray.length - 1; i++)
    drpWeatherSelect.addItem(weatherArray[i])
  drpColorSelect.clear()
  for (i = 0; i <= colorArray.length - 1; i++)
    drpColorSelect.addItem(colorArray[i])
  drpBrandSelect.clear()
  for (i = 0; i <= brandArray.length - 1; i++)
    drpBrandSelect.addItem(brandArray[i])
  drpCategorySelect.clear()
  for (i = 0; i <= categoryArray.length - 1; i++)
    drpCategorySelect.addItem(categoryArray[i])
    
    picIDArray = ""
    
    
    callQuery = "SELECT * FROM `profile` WHERE user_id =" + '"' + user_id + '"'
    req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery)
    if (req3.status == 200) {
    resultCall = JSON.parse(req3.responseText)
    var callBlob = resultCall[0][1] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    picArray = callBlob.split(".")
    homeProfilePicture.src = picArray[0]
    }
    
  else{
    imgProfilePic.src = ' ' 
    }
}


drpClothingGenderSelect.onclick=function(s){
  if (typeof(s) == "object"){
    return
  } else {
    drpClothingGenderSelect.value = s
    genderFilter = "= " + '"' + s + '"'
    //alert(genderFilter)
    //NSB.MsgBox("s is " + s + " and .selection is " + drpClothingGender.selection)
  }
}

drpWeatherSelect.onclick=function(s){
  if (drpWeatherSelect.selection == "Current Weather"){
    ChangeForm(Weather)
  } else if (typeof(s) == "object"){
    return
  } else {
    drpWeatherSelect.value = s
    weatherFilter = "= " + '"' + s + '"'
  }
}

drpColorSelect.onclick=function(s){
  if (typeof(s) == "object"){
    return
  } else {
    drpColorSelect.value = s
    colorFilter = "= " + '"' + s + '"'
  }
}

drpBrandSelect.onclick=function(s){
  if (typeof(s) == "object"){
    return
  } else {
    drpBrandSelect.value = s
    brandFilter = "= " + '"' + s + '"'
  }
}

drpCategorySelect.onclick=function(s){
  if (typeof(s) == "object"){
    return
  } else {
    drpCategorySelect.value = s
    categoryFilter = "= " + '"' + s + '"'
  }
}
btnFilterReset.onclick=function(){
  genderFilter = "IS NOT NULL"
  weatherFilter = "IS NOT NULL"
  colorFilter = "IS NOT NULL"
  brandFilter = "IS NOT NULL"
  categoryFilter = "IS NOT NULL"
  drpClothingGenderSelect.value = "Gender"
  drpWeatherSelect.value = "Weather"
  drpColorSelect.value = "Color"
  drpBrandSelect.value = "Brand"
  drpCategorySelect.value = "Category"
  
  imgHome1.src = whiteHome[0]
  imgHome2.src = whiteHome[0]
  imgHome3.src = whiteHome[0]
  imgHome4.src = whiteHome[0]
}

btnFilterSubmit.onclick=function(){
  let picMinArray = ""
  let picMaxArray = ""
  let picMin = ""
  let picMax = ""
  let picArray = ""
  
  var picIDquery = "SELECT picture_id FROM image_attributes where gender " + genderFilter + " AND weather " + weatherFilter + " AND color " + colorFilter + " AND brand " + brandFilter + " AND category " + categoryFilter + " ORDER BY RAND() LIMIT 4;"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + picIDquery)
  if (req1.status == 200) {
  picIDArray = JSON.parse(req1.responseText)
  if (picIDArray.length >= 4) {
    //alert(picIDArray)
    //randomPicID = picIDArray[Math.floor(Math.random()*picIDArray.length)];
    randomPicID1 = picIDArray[0]
    var callQuery1 = "SELECT picture FROM picture WHERE picture_id =" + randomPicID1 + ";"
    req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery1)
    if (req3.status == 200) {
      resultCall = JSON.parse(req3.responseText)
      var callBlob = resultCall[0][0] + '.'
      callBlob = callBlob.replace(/\s/gi, '+')
      //console.log(callBlob)
      picArray = callBlob.split(".")
      imgHome1.src = picArray[0]
      } else {
        //Handle that. 
        alert("Error: " + req3.status)
      }
      
    randomPicID2 = picIDArray[1]
    var callQuery2 = "SELECT picture FROM picture WHERE picture_id =" + randomPicID2 + ";"
    req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery2)
    if (req4.status == 200) {
      resultCall = JSON.parse(req4.responseText)
      var callBlob = resultCall[0][0] + '.'
      callBlob = callBlob.replace(/\s/gi, '+')
      //console.log(callBlob)
      picArray = callBlob.split(".")
      imgHome2.src = picArray[0]
      } else {
        //Handle that. 
        alert("Error: " + req4.status)
      }      
      
    randomPicID3 = picIDArray[2]
    var callQuery3 = "SELECT picture FROM picture WHERE picture_id =" + randomPicID3 + ";"
    req5 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery3)
    if (req4.status == 200) {
      resultCall = JSON.parse(req5.responseText)
      var callBlob = resultCall[0][0] + '.'
      callBlob = callBlob.replace(/\s/gi, '+')
      //console.log(callBlob)
      picArray = callBlob.split(".")
      imgHome3.src = picArray[0]
      } else {
        //Handle that. 
        alert("Error: " + req5.status)
      } 
      
    randomPicID4 = picIDArray[3]
    var callQuery4 = "SELECT picture FROM picture WHERE picture_id =" + randomPicID4 + ";"
    req5 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery4)
    if (req4.status == 200) {
      resultCall = JSON.parse(req5.responseText)
      var callBlob = resultCall[0][0] + '.'
      callBlob = callBlob.replace(/\s/gi, '+')
      //console.log(callBlob)
      picArray = callBlob.split(".")
      imgHome4.src = picArray[0]
      } else {
        //Handle that. 
        alert("Error: " + req5.status)
      }
      
      
      
    } else if (picIDArray.length == 3) {
      //alert(picIDArray)
      //randomPicID = picIDArray[Math.floor(Math.random()*picIDArray.length)];
      randomPicID1 = picIDArray[0]
      var callQuery1 = "SELECT picture FROM picture WHERE picture_id =" + randomPicID1 + ";"
      req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery1)
      if (req3.status == 200) {
        resultCall = JSON.parse(req3.responseText)
        var callBlob = resultCall[0][0] + '.'
        callBlob = callBlob.replace(/\s/gi, '+')
        //console.log(callBlob)
        picArray = callBlob.split(".")
        imgHome1.src = picArray[0]
        } else {
          //Handle that. 
          alert("Error: " + req3.status)
        }
        
      randomPicID2 = picIDArray[1]
      var callQuery2 = "SELECT picture FROM picture WHERE picture_id =" + randomPicID2 + ";"
      req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery2)
      if (req4.status == 200) {
        resultCall = JSON.parse(req4.responseText)
        var callBlob = resultCall[0][0] + '.'
        callBlob = callBlob.replace(/\s/gi, '+')
        //console.log(callBlob)
        picArray = callBlob.split(".")
        imgHome2.src = picArray[0]
        } else {
          //Handle that. 
          alert("Error: " + req4.status)
        }
        
      randomPicID3 = picIDArray[2]
      var callQuery3 = "SELECT picture FROM picture WHERE picture_id =" + randomPicID3 + ";"
      req5 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery3)
      if (req4.status == 200) {
        resultCall = JSON.parse(req5.responseText)
        var callBlob = resultCall[0][0] + '.'
        callBlob = callBlob.replace(/\s/gi, '+')
        //console.log(callBlob)
        picArray = callBlob.split(".")
        imgHome3.src = picArray[0]
        } else {
          //Handle that. 
          alert("Error: " + req5.status)
        } 
        
        imgHome4.src = whiteHome[0]
    } else if (picIDArray.length == 2) {
      //alert(picIDArray)
      //randomPicID = picIDArray[Math.floor(Math.random()*picIDArray.length)];
      randomPicID1 = picIDArray[0]
      var callQuery1 = "SELECT picture FROM picture WHERE picture_id =" + randomPicID1 + ";"
      req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery1)
      if (req3.status == 200) {
        resultCall = JSON.parse(req3.responseText)
        var callBlob = resultCall[0][0] + '.'
        callBlob = callBlob.replace(/\s/gi, '+')
        //console.log(callBlob)
        picArray = callBlob.split(".")
        imgHome1.src = picArray[0]
        } else {
          //Handle that. 
          alert("Error: " + req3.status)
        }
        
      randomPicID2 = picIDArray[1]
      var callQuery2 = "SELECT picture FROM picture WHERE picture_id =" + randomPicID2 + ";"
      req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery2)
      if (req4.status == 200) {
        resultCall = JSON.parse(req4.responseText)
        var callBlob = resultCall[0][0] + '.'
        callBlob = callBlob.replace(/\s/gi, '+')
        //console.log(callBlob)
        picArray = callBlob.split(".")
        imgHome2.src = picArray[0]
        } else {
          //Handle that. 
          alert("Error: " + req4.status)
        }
      imgHome3.src = whiteHome[0]
      imgHome4.src = whiteHome[0]
    } else if (picIDArray.length == 1) {
      //alert(picIDArray)
      //randomPicID = picIDArray[Math.floor(Math.random()*picIDArray.length)];
      randomPicID1 = picIDArray[0]
      var callQuery1 = "SELECT picture FROM picture WHERE picture_id =" + randomPicID1 + ";"
      req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery1)
      if (req3.status == 200) {
        resultCall = JSON.parse(req3.responseText)
        var callBlob = resultCall[0][0] + '.'
        callBlob = callBlob.replace(/\s/gi, '+')
        //console.log(callBlob)
        picArray = callBlob.split(".")
        imgHome1.src = picArray[0]
        } else {
          //Handle that. 
          alert("Error: " + req3.status)
        }
      imgHome2.src = whiteHome[0]
      imgHome3.src = whiteHome[0]
      imgHome4.src = whiteHome[0]
    } else {
      imgHome1.src = whiteHome[0]
      imgHome2.src = whiteHome[0]
      imgHome3.src = whiteHome[0]
      imgHome4.src = whiteHome[0]
      NSB.MsgBox("Sorry, no results match your criteria")
    }
   }
  }
  
  
/*
  var picMaxQuery = "SELECT MAX(picture_id) FROM picture"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + picMaxQuery)
  if (req1.status == 200) {
    picMaxArray = JSON.parse(req1.responseText)
    picMax = Number(picMaxArray[0])
    } else {
      alert("you have failed" + req1.status)
    }

  var picMinQuery = "SELECT MIN(picture_id) FROM picture"
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + picMinQuery)
  if (req2.status == 200) {
    picMinArray = JSON.parse(req2.responseText)
    picMin = Number(picMinArray[0])
    } else {
      alert("you have failed" + req2.status)
    }
    
  function minMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  var randomPicID = minMax(picMin, picMax)
  console.log(randomPicID)
  
  var callQuery = "SELECT picture FROM picture WHERE picture_id =" + randomPicID + ";"
  req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + callQuery)
  if (req3.status == 200) {
    resultCall = JSON.parse(req3.responseText)
    var callBlob = resultCall[0][0] + '.'
    callBlob = callBlob.replace(/\s/gi, '+')
    console.log(callBlob)
    picArray = callBlob.split(".")
    imgHome1.src = picArray[0]
    } else {
      //Handle that. 
      alert("Error: " + req3.status)
    }
    */
//}

homeProfilePicture.onclick=function(){
  ChangeForm(profile)
}

imgHome1.onclick=function(){
var favQuery = "INSERT INTO favorites (picture_id, user_id) VALUES ( " + '"' + picIDArray[0] + '" , "' + user_id + '"' + ") "
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + favQuery)
  if (req.status == 200) {
  NSB.MsgBox("Added to Favorites")
    } else {
      //Handle that. 
      alert("Error: " + req.status)
    }
}

imgHome2.onclick=function(){
var favQuery = "INSERT INTO favorites (picture_id, user_id) VALUES ( " + '"' + picIDArray[1] + '" , "' + user_id + '"' + ") "
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + favQuery)
  if (req.status == 200) {
  NSB.MsgBox("Added to Favorites")
    } else {
      //Handle that. 
      alert("Error: " + req.status)
    }
}

imgHome3.onclick=function(){
var favQuery = "INSERT INTO favorites (picture_id, user_id) VALUES ( " + '"' + picIDArray[2] + '" , "' + user_id + '"' + ") "
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + favQuery)
  if (req.status == 200) {
  NSB.MsgBox("Added to Favorites")
    } else {
      //Handle that. 
      alert("Error: " + req.status)
    }
}

imgHome4.onclick=function(){
var favQuery = "INSERT INTO favorites (picture_id, user_id) VALUES ( " + '"' + picIDArray[3] + '" , "' + user_id + '"' + ") "
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + favQuery)
  if (req.status == 200) {
  NSB.MsgBox("Added to Favorites")
    } else {
      //Handle that. 
      alert("Error: " + req.status)
    }
}
UploadPhoto.onclick=function(){
  ChangeForm(picUpload)
}



  var whiteHomeQuery = "SELECT picture FROM picture WHERE picture_id = 1"
  req100 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + whiteHomeQuery)
  whiteHomeArray = JSON.parse(req100.responseText)
  var whiteHomeBlob = whiteHomeArray[0][0] + '.'
  whiteHomeBlob = whiteHomeBlob.replace(/\s/gi, '+')
  whiteHome = whiteHomeBlob.split(".")
  imgHome1.src = whiteHome[0]
  imgHome2.src = whiteHome[0]
  imgHome3.src = whiteHome[0]
  imgHome4.src = whiteHome[0]