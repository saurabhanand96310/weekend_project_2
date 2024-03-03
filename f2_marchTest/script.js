function validation() {
    let bool = true;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    
    let emailRegex = /^.{3,}@.*\..+$/;
    let emsg = document.getElementById("emsg");
    if (!emailRegex.test(email)) {
      emsg.innerHTML = "Make sure email is more than 3 characters and has @ and a .";
      emsg.style.color = "red";
      bool = false;
    } else {
        emsg.innerHTML = "";
    } 
    
    let ptext = "";
    let pmsg = document.getElementById("pmsg");
    if (pass.length <= 8) {
      pmsg.innerHTML = "Make sure password is more than 8 characters.";
      pmsg.style.color = "red";
      bool = false;
    } else {
        pmsg.innerHTML = "";
    }
    
    let good = document.getElementById("allgood")
    if(bool) {
        good.innerHTML = "All good to go!";
      good.style.color = "green";
    } else {
        good.innerHTML = "";
    }
  }