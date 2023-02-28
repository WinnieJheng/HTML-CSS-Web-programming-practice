// 明亮模式與暗黑模式

'use strict'; // 收取錯誤訊息

const switcher = document.querySelector('.btn3'); // 取得按鈕參考

// 為 click 事件新增接聽程式，並定義事件處理常式函式，以便在 click 事件發生時可由瀏覽器執行
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark mode";
    } else {
        this.textContent = "Light mode";
    }
});