var a = document.getElementsByClassName("my_account");
var CurrUsr = a[0].getElementsByTagName("p")[0];
var NxtAct = document.getElementsByClassName("log_in")[0].getElementsByTagName("a")[0];
var text = document.getElementsByTagName("p");
window.localStorage.setItem("admin","admin");
function checkUserName(){
  var usr = document.getElementById("usrnameRegisration").value;
  var message = document.getElementById("message");
  if (window.localStorage.getItem(usr) == null )
  return true;
  else
  {
    message.textContent = "This user name is previously used";
    message.style.backgroundColor = "#ff4d4d";
    return false;
  }
}

function checkPassword(){
  var password = document.getElementById("passwordRegister").value;
  var confirmPassword = document.getElementById("CpasswordRegister").value;
  var message = document.getElementById("message");
  if (password.length > 7)
  {
    if (password == confirmPassword)
    {
      message.textContent = "Password match";
      message.style.backgroundColor = "#3ae374";
      return true;
    }
    else
    {
        message.textContent = "Password don't match";
        message.style.backgroundColor = "#ff4d4d";
        return false;
      }
    }
    else
    {
      message.textContent = "password can't be less  8 charactes";
      message.style.backgroundColor = "#ff4d4d";
      return false;
    }
  }
  
  function saveData()
  {
    if (checkUserName() == true && checkPassword() == true)
    {
      var usr = document.getElementById("usrnameRegisration").value;
      var psw = document.getElementById("passwordRegister").value;
      window.localStorage.setItem(usr, psw);
      message.textContent = "Registration Complete..";
      message.style.backgroundColor = "#3ae374";
    }
  }
  
  function checkLogin()
  {
    var usr = document.getElementById("usrnameLogin").value;
    var psw = document.getElementById("passwordLogin").value;
    var message = document.getElementById("loginAlerts");
    if (window.localStorage.getItem(usr) != null 
    && window.localStorage.getItem(usr) == psw)
    {
      message.textContent = "Login Successfully!";
      message.style.backgroundColor = "#3ae374";
      window.localStorage.setItem("CurrUsr", usr);
      CurrUsr.textContent = window.localStorage.getItem("CurrUsr");
      CurrUsr.style.color="#3ae374";
      NxtAct.innerHTML = "Log Out";
      NxtAct.style.color = "#f00";
      NxtAct.href = "javascript:delete_CurrUser ()";
      window.location.replace("../HTML/home.html");
    }
    else
    {
      message.textContent = "Check your username or password!";
      message.style.backgroundColor = "#ff4d4d";
    }
  }

  if (window.localStorage.getItem("CurrUsr") != null)
  {
    CurrUsr.textContent = window.localStorage.getItem("CurrUsr");
    console.log(NxtAct.innerHTML);
    CurrUsr.style.color="#3ae374";
    NxtAct.innerHTML = "Log Out";
    NxtAct.style.color = "#f00";
    NxtAct.href = "javascript:delete_CurrUser();";
  }
  function delete_CurrUser(){
    window.localStorage.removeItem("CurrUsr") ;
    location.reload() ;
  }
  
  
  if (window.localStorage.getItem("CurrUsr") === "admin"){
    document.getElementById("SaveChanges").style.display="block" ;
    for(var i = 1; i< text.length; i++)
    text[i].setAttribute("contenteditable","true");
  }
 else
  document.getElementById("SaveChanges").style.display = "none";
  
  function SaveChanges()
  {
    for (var i = 1; i < text.length; i++)
    window.localStorage.setItem(pagename + " text " + i, text[i].textContent);
    for(var i =1 ;i< text.length ; i++)
    text[i].textContent = window.localStorage.getItem(pagename + " text " + i);
  }
  `-`
  for(var i =1 ;i< text.length ; i++)
  if (window.localStorage.getItem(pagename + " text " + i) != null)
  text[i].textContent = window.localStorage.getItem(pagename + " text " + i);

function ShowPassword(x)
{
  var pssField = document.getElementsByClassName("pass")[x].getElementsByTagName("input")[0];
  if (pssField.type === "password")
  {
    document.getElementsByClassName("password")[x].style.color = "#00f";
    pssField.type = "text";
  }
  else
  {
    document.getElementsByClassName("password")[x].style.color = "gray";
    pssField.type = "password";
  }
}
