// ==UserScript==
// @name         卡宝自动提交
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动提交
// @author       vonxing
// @match        https://www.kabaojiedan.com/public/user_orders/manual_qy
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kabaojiedan.com
// @grant        none
// ==/UserScript==

(function() {
    function clickButton() {
        var button = $(".dt-btn-success");
        if (button.length > 0) {
            setTimeout(function() {
                var divElement = $(".mask-tab.mask-detail");
                if (divElement.hasClass("hide")) {
                    console.log("该 div 元素具有 hidden 类，不点击按钮");
                } else {
                    console.log("该 div 元素没有 hidden 类，点击按钮");
                    button.click();
                    console.log("按钮已点击");
                }
            }, 15000); // 等待 5 秒后执行点击操作
        } else {
            console.log("按钮不存在");
        }
    }

    // 定时循环调用 clickButton 方法
    setInterval(clickButton, 2000); // 每隔 10 秒调用一次


})();
