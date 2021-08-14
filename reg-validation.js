function isValid(){
var FirstName = document.forms["Rform"]["firstname"].value;
var LastName = document.forms["Rform"]["lastname"].value;
var Gender = document.forms["Rform"]["gender"].value;
var Dob = document.forms["Rform"]["dob"].value;
var Religion = document.forms["Rform"]["religion"].value;
var Username = document.forms["Rform"]["username"].value;
var Password = document.forms["Rform"]["password"].value;
if(FirstName === ""){
document.getElementById("firstnameerror").innerHTML = "empty";

}

if(LastName === ""){
    document.getElementById("lastnameerror").innerHTML = "empty";
    
    }
if(Gender === ""){
     document.getElementById("gendererror").innerHTML = "empty";
        
    }
if(Dob === ""){
document.getElementById("doberror").innerHTML = "empty";

}
if(Religion === ""){
document.getElementById("religionerror").innerHTML = "empty";

}
if(Username === ""){
document.getElementById("usernameerror").innerHTML = "empty";

}
if(Password === ""){
document.getElementById("passworderror").innerHTML = "empty";
return false;
}
else{
    return true;
}

}