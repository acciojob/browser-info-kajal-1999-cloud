//your JS code here. If required.
const div = document.createElement("div") ;
div.idName = "browser-info" ;
 div.innerText = `You are using ${navigator.appName} version${navigator.appVersion}`;
document.body.append(div);
