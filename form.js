function abc()
{
    var user=document.getElementById("user");
    var pass=document.getElementById("pass");
    if(user.value.trim()=="")
    {
        //alert("Blank Value not applicable");
        user.style.border="solid 2px #C23437"
        document.getElementById("lbluser").style.visibility="visible";
        return false;
    }
    else if(user.value.trim().length<5)
    {
        //alert("User Name is too Short");
        user.style.border="solid 2px #C23437"
        document.getElementById("lbluser").style.visibility="visible";
        return false;
    }
    else if(pass.value.trim()=="")
    {
        //alert("Blank Value not applicable");
        pass.style.border="solid 2px #C23437"
        document.getElementById("lblpass").style.visibility="visible";
        return false;
    }
    else if(pass.value.trim().length<5)
    {
        //alert("Password is too Short");
        pass.style.border="solid 2px #C23437"
        document.getElementById("lblpass").style.visibility="visible";
        return false;
    }
    else
    {
        return true;
    }
}