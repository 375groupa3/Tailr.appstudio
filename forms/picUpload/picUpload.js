
let genderArray = ["Men's", "Women's", "Unisex"]
let weatherArray = ["Hot","Cold","Rain","Snow", "Other"]
let colorArray = ["White", "Yellow", "Red", "Pink", "Blue", "Green", "Orange", "Purple", "Black", "Other"]
let brandArray = ["Nike","Adidas","Levi","Gucci","Polo Ralph Lauren","Calvin Klein","Aeropostale","Versace","American Eagle","Victoria's Secret", "Other"]
let categoryArray = ["Sport","Formal","Casual","Outdoors", "Other"]

var lastID = ""
var genderSelect = ""
var weatherSelect = ""
var colorSelect = ""
var brandSelect = ""
var categorySelect = ""

picUpload.onshow=function(){
  drpClothingGender.clear()
  for (i = 0; i <= genderArray.length - 1; i++)
    drpClothingGender.addItem(genderArray[i])
  drpWeather.clear()
  for (i = 0; i <= weatherArray.length - 1; i++)
    drpWeather.addItem(weatherArray[i])
  drpColor.clear()
  for (i = 0; i <= colorArray.length - 1; i++)
    drpColor.addItem(colorArray[i])
  drpBrand.clear()
  for (i = 0; i <= brandArray.length - 1; i++)
    drpBrand.addItem(brandArray[i])
  drpCategory.clear()
  for (i = 0; i <= categoryArray.length - 1; i++)
    drpCategory.addItem(categoryArray[i])
}

reader = new FileReader();

txtGetPic.onchange=function(){
  reader.readAsDataURL(txtGetPic.files[0]);
  var picBase64 = ""
  var pic1 = "";
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
  //console.log(picBase64)
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + query)
  if (req1.status == 200) {
    //alert("successfully inserted picture")
    var lastIDquery = "SELECT MAX(picture_id) FROM picture"
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + lastIDquery)
    if (req2.status == 200) {
      lastID = JSON.parse(req2.responseText)
      //alert(lastID)
      var attributesQuery = "INSERT INTO image_attributes (picture_id, gender, weather, color, brand, category) VALUES (" + '"' + lastID + '",' + '"' + genderSelect + '",' + '"' + weatherSelect  + '",' + '"' + colorSelect + '",' + '"' + brandSelect + '",' + '"' + categorySelect + '")'
      req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jqb64765&pass=bia375&database=375groupa3&query=" + attributesQuery)
      if (req3.status == 200) {
        alert("successfully inserted picture attributes")
      } else {
        alert("failed to insert attributes + req3.status")
      }
    } else {
      alert("you have failed" + req2.status)
    }
  } else {
    alert("You have failed" +  req1.status)
  }
}



drpClothingGender.onclick=function(s){
  if (typeof(s) == "object"){
    return
  } else {
    drpClothingGender.value = s
    genderSelect = s
    //NSB.MsgBox("s is " + s + " and .selection is " + drpClothingGender.selection)
  }
}

drpWeather.onclick=function(s){
  if (typeof(s) == "object"){
    return
  } else {
    drpWeather.value = s
    weatherSelect = s
  }
}

drpColor.onclick=function(s){
  if (typeof(s) == "object"){
    return
  } else {
    drpColor.value = s
    colorSelect = s
  }
}

drpBrand.onclick=function(s){
  if (typeof(s) == "object"){
    return
  } else {
    drpBrand.value = s
    brandSelect = s
  }
}

drpCategory.onclick=function(s){
  if (typeof(s) == "object"){
    return
  } else {
    drpCategory.value = s
    categorySelect = s
  }
}

hmbUpload.onclick=function(s){
  if (typeof(s) == "object") {
    return;
  }
  if {s === "Home")
    ChangeForm(home)
}
