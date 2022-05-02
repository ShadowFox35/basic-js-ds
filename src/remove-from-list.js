const {
  NotImplementedError,
} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
  class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }
**/

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
function removeKFromList(l, k) {
  console.log(l);
  let result;
  let arr = l;
  let count = 1;
  let deep = 0;

  while (arr.next) {
    count += 1;
    arr = arr.next;
  }

  while (count !== deep) {
    if (!result && obj(l, deep).value !== k) {
      result = new ListNode(obj(l, deep).value);
    } else if (result && obj(l, deep).value !== k) {
      last(result).next = new ListNode(obj(l, deep).value);
    }
    deep++;
  }
  
  return result;
}

function obj(l, deep) {
  if (deep == 0) {
    return l;
  }

  return obj(l.next, deep - 1);
}

function last(result) {
  if (!result.next) {
    return result;
  }

  return last(result.next);
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
const expected = convertArrayToList([1, 2, 4, 5]);
console.log(removeKFromList(initial, 3));

module.exports = {
  removeKFromList,
};
