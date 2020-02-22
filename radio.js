function select()
{
    var rd1=document.getElementById("rd1");
    var rd2=document.getElementById("rd2");
    var rd3=document.getElementById("rd3");
    if(rd1.checked ==true)
    {
        alert("You are : "+rd1.value);
    }
    else if(rd2.checked==true)
    {
        alert("You are : "+rd2.value);
    }
    else if(rd3.checked==true)
    {
        alert("Yor are : "+rd3.value);
    }
    else
    {
        alert("No option Selected");
    }

}