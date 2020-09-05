function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
{
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
}
else
{
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        document.querySelector("div[data-elementname='currentPassword']").innerHTML=xmlhttp.responseText;
        document.querySelector("div[data-elementname='currentPassword']").style.display="";
    }
}
xmlhttp.open("GET","http://localhost:9090/otp?identifier="+document.getElementById("capture_signIn_emailOrMobileNumber").value,true); 
xmlhttp.send();
}

document.writeln("<a href=\"javascript: loadXMLDoc()\" > SMS Validation </a>");
