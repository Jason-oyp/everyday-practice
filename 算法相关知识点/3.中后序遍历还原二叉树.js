const middle = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];
const behind = ['d', 'e', 'b', 'f', 'g', 'c', 'a'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function restore(middle, behind) {
    if (behind.length === 0 || middle.length === 0 || behind.length !== middle.length || behind == null || middle == null) return null;
    const root = new Node(behind[behind.length - 1]);
    const index = middle.indexOf(behind[behind.length - 1]);
    const middleLeft = middle.slice(0, index);
    const middleRight = middle.slice(index + 1, middle.length);
    const behindLeft = behind.slice(0, middleLeft.length);
    const behindRight = behind.slice(middleLeft.length, behind.length - 1);
    root.left = restore(middleLeft,behindLeft);
    root.right = restore(middleRight,behindRight);
    return root;
}

console.log(restore(middle,behind));