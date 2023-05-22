// ==UserScript==
// @name         youtubecolors
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  modifica los colores de youtube
// @author       dasilvamathias05
// @match        https://www.youtube.com/
// @match        ://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @require https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';//generalcolors
    $(document).ready(function() {
    $("html[dark], [dark]").css("--yt-spec-base-background", "rgb(18 18 44 / 55%)");
           // --yt-spec-base-background##01022ccf
});
    $(document).ready(function() {
    $("html[dark], [dark]").css({"--ytd-searchbox-legacy-border-color": "hsl(254.77deg 77.78% 27.02%)",
                                "--ytd-searchbox-legacy-button-border-color": "hsl(254.77deg 77.78% 27.02%)",
                                "--ytd-searchbox-legacy-border-shadow-color": "hsl(0deg 100% 50% / 49%)",
                                "--ytd-searchbox-legacy-button-color": "hsl(257.54deg 58.36% 11.44%)"});
           // --ytd-searchbox-legacy-border-color
});
    //tabla de la cuenta
    $(document).ready(function() {
    $("html[dark], [dark]").css("--app-drawer-content-container-background-color", "#050518bf");

});//menu de guia
   $(document).ready(function() {
    $("html").css("--yt-spec-menu-background", "#050518bf");
});

    // Your code here...
})();
