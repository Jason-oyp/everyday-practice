/**
 * 函数防抖
 * @param {*} func 需要执行的函数
 * @param {*} delay 定义多少时间执行一次
 */

const throttle = function (func, delay) {
    let prevTime = new Date().getTime();
    return function (...arg) {
        const nowTime = new Date().getTime();
        if (nowTime - prevTime < delay) {
            return;
        } else {
            func.apply(this, arg);
            prevTime = nowTime;
        }
    }
}

const inp = document.getElementsByTagName('input')[0];
inp.oninput = throttle(function (e) {
    console.log(e.target.value);
}, 500);