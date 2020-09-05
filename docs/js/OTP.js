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


//timer
var countdown = 60; 

function settime(val) { 
if(countdown != 0){

val.setAttribute("disabled", true); 
val.onclick=function(){};
val.innerHTML="Please enter the SMS code in (" + countdown + ") seconds."; 
countdown--; 
}else {
 val.removeAttribute("disabled"); 
 val.onclick=SMSClick;
 val.innerHTML="Login with SMS"; 
 countdown = 60;
 
return;
 } 
setTimeout(function() {
settime(val) 
},1000) 
};

//

//SMS click
function SMSClick() {
    loadWithJs();
    //this.style.color = 'blue';
    //this.innerHTML = "Please enter SMS code in 60 seconds";
    settime(this);
    return false;
};
//

function appendSMSLink() {
var container = document.getElementById("capture_signIn_signInForm");
var alink = document.createElement('a');
alink.href = '#';
alink.id = 'SMSVerify';
alink.onclick = SMSClick;

alink.innerHTML = 'Login with SMS';
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
}

window.onload = appendSMSLink;

//setTimeout(appendSMSLink, 5000);
