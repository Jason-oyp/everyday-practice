function ListNode(val) {
    this.val = val;
    this.next = null;
}


function mergeTwoLists(l1, l2) {
    let l3 = new ListNode();
    const result = l3;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }
        l3 = l3.next;
    }

    if (l1 !== null) {
        l3.next = l1;
    }
    if (l2 !== null) {
        l3.next = l2;
    }

    return result.next;
}

const l1 = new ListNode(1);
const l2 = new ListNode(1);

l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

// console.log(mergeTwoLists(l1, l2));

function bianli(l3) {
    if (!l3) return;
    console.log(l3.val);
    bianli(l3.next);
}

console.log(bianli(mergeTwoLists(l1, l2)));