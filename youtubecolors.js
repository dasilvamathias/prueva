// ==UserScript==
// @name         youtubecolors
// @namespace    http://tampermonkey.net/
// @version      1.10
// @description  modifica los colores de youtube
// @author       dasilvamathias05
// @match        https://www.youtube.com/
// @match        ://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.trustedTypes && window.trustedTypes.createPolicy && !window.trustedTypes.defaultPolicy) {
    window.trustedTypes.createPolicy('default', {
        createHTML: string => string
        // Optional, only needed for script (url) tags
        //,createScriptURL: string => string
        //,createScript: string => string,
    });
}
    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('html[dark], [dark]{--yt-spec-menu-background:#050518bf;--app-drawer-content-container-background-color:#050518bf;--yt-spec-base-background:rgb(18 18 44 / 55%);--ytd-searchbox-legacy-border-color: hsl(254.77deg 77.78% 27.02%);--ytd-searchbox-legacy-button-border-color: hsl(254.77deg 77.78% 27.02%);,--ytd-searchbox-legacy-border-shadow-color: hsl(0deg 100% 50% / 49%);--ytd-searchbox-legacy-button-color: hsl(257.54deg 58.36% 11.44%);--ytd-searchbox-legacy-border-shadow-color: hsl(0deg 100% 50% / 49%);}');


    // Your code here...
})();














