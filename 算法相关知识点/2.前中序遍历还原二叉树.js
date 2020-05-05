const before = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];
const middle = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];


function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function restore(before, middle) {
    if (before.length === 0 || middle.length === 0 || before.length !== middle.length || before == null || middle == null) return null;
    const root = new Node(before[0]);
    const index = middle.indexOf(before[0]);
    const beforeLeft = before.slice(1, 1 + index);
    const beforeRight = before.slice(1 + index, before.length);
    const middleLeft = middle.slice(0, index);
    const middleRight = middle.slice(index + 1, middle.length);
    root.left = restore(beforeLeft, middleLeft);
    root.right = restore(beforeRight, middleRight);
    return root;
}

console.log(restore(before, middle));