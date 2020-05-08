function groupAnagrams(strs) {
    if (strs.length == 0) {
        return [];
    }
    
    const map = new Map();
    for (let prop of strs) {
        let arr = new Array(26).fill(0);
        for (let i = 0; i < prop.length; i++) {
            const index = prop.charCodeAt(i) - 97;
            arr[index]++;
            console.log(arr);
        }
        arr = arr.join('');
        // console.log(arr);
        if (map.has(arr)) {
            map.set(arr, [...map.get(arr), prop]);
        } else {
            map.set(arr, [prop]);
        }
    }
    const result = [];
    console.log(map);
    for (let arr of map) {
        result.push(arr[1]);
    }
    return result;
}

const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
console.log(result);