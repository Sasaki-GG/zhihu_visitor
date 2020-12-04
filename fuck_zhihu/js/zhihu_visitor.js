// get html style ("overflow: hidden; margin-right: 14px;")
var p = document.documentElement;
// delete style
p.style = "";
// get class of log-in interface
setTimeout(function () {
    document.getElementsByClassName("Modal-wrapper undefined Modal-enter-done").item(0).className = "";
}, 1000);
