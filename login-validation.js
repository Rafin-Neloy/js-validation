function isValid(){
    var UserName = document.forms["loginform"]["username"].value;
    var Password = document.forms["loginform"]["password"].value;
    if(UserName === ""){
    document.getElementById("usernameerror").innerHTML = "UserName empty";
    
    }
    
    if(Password === ""){
    document.getElementById("passworderror").innerHTML = "Password empty";
    return false;
    }
    else{
        return true;
    }
    
    }