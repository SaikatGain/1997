function use()
{
    var username=document.getElementById("user");
    var password=document.getElementById("pass");
    if(username.value.trim()="")
    {
        alert("Too Short UserName");
        return false;
    }
    else if(password.value.trim()="")
    {
        return false;
    }
    else
    {
        return true;
    }

}