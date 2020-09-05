//janrain.settings.capture = janrain.settings.capture || {}
//janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad = janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad || []
//janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad.push(function() {
//    appendSMSLink();
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
xmlhttp.open("GET","https://akamai.yunzhutech.cn:9090/otp") ;
xmlhttp.send();
}


function appendSMSLink() {
var container = document.getElementById("capture_signIn_signInForm");
var alink = document.createElement('a');
alink.href = '#';
alink.onclick = function () {
    loadWithJs();
    this.style.backgroundColor = 'red';
    return false;
};
alink.innerHTML = 'SMS Validation';
container.appendChild(alink);
}

function loadScript(url) {
    var scrs = document.getElementsByTagName('script');
    var last = scrs[scrs.length - 1];
    var scr = document.createElement('script');
    scr.src = url;
    scr.async = true;
    last.parentNode.insertBefore(scr, last);
}

function loadWithJs(){    
loadScript("https://akamai.yunzhutech.cn:9090/otp?identifier="+document.getElementById("capture_signIn_emailOrMobileNumber").value);


if (window.addEventListener)  
window.addEventListener("load",appendSMSLink(), false);  
else if (window.attachEvent)  
window.attachEvent("onload",appendSMSLink());  
else 
window.onload =appendSMSLink();  
}
