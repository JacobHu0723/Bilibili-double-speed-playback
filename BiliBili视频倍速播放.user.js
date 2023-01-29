// ==UserScript==
// @name         BiliBili视频倍速播放
// @namespace    https://github.com/JacobHu0723/Bilibili-double-speed-playback
// @version      1.0.0
// @description  BiliBili视频倍速播放
// @author       Jacob Hu
// @match        https://www.bilibili.com/video/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //添加按钮
    var inputbtn = document.createElement('input');
    inputbtn.id="btn";
    inputbtn.type="button";
    inputbtn.value="调节播放速度";
    inputbtn.onclick = function() {
        var s=prompt("播放速度（0～4）");
        document.querySelector("video").playbackRate=s;
    };
    setTimeout(function() {document.getElementById("viewbox_report").appendChild(inputbtn);},30000);


    // Your code here...
})();