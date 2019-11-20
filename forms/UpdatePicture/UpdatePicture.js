
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
  imgProfile.src = e.target.result; //Phone Viewing ONLY
  picBase64 = e.target.result;
  return;
};