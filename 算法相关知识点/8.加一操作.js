function addOne(arr) {
    for (let i = arr.length - 1; i >= 0;i--){
        if (arr[i] !== 9) {
            arr[i]++;
            return arr;
        } else {
            arr[i] = 0;
        }
    }
    return [1,...arr]
}

console.log(addOne([1,9,9,9]));