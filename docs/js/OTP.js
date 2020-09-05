//janrain.settings.capture = janrain.settings.capture || {}
//janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad = janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad || []
//janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad.push(function() {
//    document.writeln("<a href=\"javascript: loadXMLDoc()\" > SMS Validation 200 </a>");
//})

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
//xmlhttp.open("GET","https://gw.guoqing.li:9090/otp?identifier="+document.getElementById("capture_signIn_emailOrMobileNumber").value,true); 
xmlhttp.open("GET","https://gw.guoqing.li:9090/otp") ;
xmlhttp.send();
}

window.οnlοad=function(){
var container = document.getElementById("capture_signIn_signInForm");
var alink = document.createElement('a');
alink.href = '#';
alink.onclick = function () {
    loadXMLDoc();
    this.style.backgroundColor = 'red';
    return false;
};
alink.innerHTML = 'SMS Validation';
container.appendChild(alink);
}

