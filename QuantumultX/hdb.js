// ==UserScript==
// @name         得众子账号替换
// @namespace    http://tampermonkey.net/
// @version      2024-10-04
// @description  try to take over the world!
// @author       vonxing
// @match        http://www.hdb666.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hdb666.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 定义数字映射
    const numberMap = {
        '1560588644912': '1560588644912(J)',
        '1560588644911': '1560588644911(B)',
        '1560588644910': '1560588644910(L)',
        '1560588644909': '1560588644909(K)',
        '1560588644908': '1560588644908(i)',
        '1560588644907': '1560588644907(135)',
        '1560588644906': '1560588644906(云闪付F)',
        '1560588644905': '1560588644905(ZFB2)',
        '1560588644904': '1560588644904(ZFB1)',
        '1560588644903': '1560588644903(186)',
        '1560588644902': '1560588644902(199)',
        '1560588644901': '1560588644901(156)',
    };
    function clickButton() {
        var button = $("#tab-bySubAccount");
        if (button.length > 0) {
            if (button.hasClass("is-active")) {
                replaceNumbersInText(document.body);
               // console.log("该 div 元素具有 hidden 类，不点击按钮");
            } else {

            } // 等待 5 秒后执行点击操作
        } else {
           // console.log("按钮不存在");
        }

    }
    // 函数：替换文本节点中的数字
    function replaceNumbersInText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.nodeValue;

            // 替换数字
            for (const [key, value] of Object.entries(numberMap)) {
                const regex = new RegExp(`(^|\\s)${key}($|\\s)`, 'g'); // 匹配完整的数字
                text = text.replace(regex, `\$1${value}\$2`); // 保留前后的空格
            }

            node.nodeValue = text;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // 遍历子节点
            node.childNodes.forEach(replaceNumbersInText);
        }
    }

    // 开始替换

    setInterval(clickButton, 3000);
})();
