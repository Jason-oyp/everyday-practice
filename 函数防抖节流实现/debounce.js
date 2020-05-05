const debounce = function (func, delay) {
    let timer = null;
    return function (...arg) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.call(this, ...arg)
        }, delay);
    }
}



const inp = document.getElementsByTagName('input')[0];
inp.oninput = debounce(function (e) {
    console.log(e.target.value);
}, 500);