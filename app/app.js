function togglePass() {
  if (document.getElementById("pass").getAttribute("type") == "password") {
    document.getElementById("pass").setAttribute("type", "text");
    document.getElementById("icon").setAttribute("class", "fa fa-eye-slash");
    console.log("Majed was here!");
  } else {
    document.getElementById("pass").setAttribute("type", "password");
    document.getElementById("icon").setAttribute("class", "fa fa-eye");
  }
}
