function borderRedUsername(){
  if(document.getElementById("username").value == ""){
      document.getElementById("username").style.borderColor = "red";
      alert("Username cannot be empty!");
      return false;
  }
  if (document.getElementById("password1").value =="") {
    document.getElementById("password1").style.borderColor = "red";
    alert("Password cannot be empty!");
    return false;
  }
  if (document.getElementById("email").value =="") {
    document.getElementById("email").style.borderColor = "red";
    alert("You must enter you email!");
    return false;
  }
  if (document.getElementById("password1").value != document.getElementById("password2").value) {
    document.getElementById("password1").style.borderColor = "red";
    document.getElementById("password2").style.borderColor = "red";
    alert("Password missmatch!");
    return false;
  }
  return true;
}
