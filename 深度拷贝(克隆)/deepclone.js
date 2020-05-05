function deepclone(origin, target) {
    target = target || {};
    for (const prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            if (typeof origin[prop] === "object" && origin[prop] !== null) {
                target[prop] = origin[prop] instanceof Array ? deepclone(origin[prop], []) : deepclone(origin[prop], {});
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}

const obj = {
    a: 1,
    b: true,
    c: null,
    d: ['a', {
        ddd: 4
    }],
    e: {
        father: 'jason'
    }
}
const cloneObj = deepclone(obj);
console.log(cloneObj, cloneObj === obj);