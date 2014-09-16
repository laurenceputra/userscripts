// ==UserScript==
// @name confluence uncheck
// @namespace confluence
// @include https://confluence.paypal.com/cnfl/pages/editpage.action?pageId=*
// @version 1
// @grant none
// ==/UserScript==
window.onload = setTimeout(function(){
	document.getElementById("notifyWatchers").checked = false;
	document.getElementById("notifyWatchers").value = false;
},5000);
