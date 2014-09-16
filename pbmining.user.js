// ==UserScript==
// @name        pbmining
// @namespace   pbmining
// @description avoids the pbmining stats page
// @include     https://pbmining.com/*
// @version     1
// @grant       none
// ==/UserScript==
if(window.location == "https://pbmining.com/stats.html" || window.location == "https://pbmining.com/stats.html?&ref="){
	window.location = "https://pbmining.com/profile.html?";
}
