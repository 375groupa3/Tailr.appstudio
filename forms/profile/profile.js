

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
