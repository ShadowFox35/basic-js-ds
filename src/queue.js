const {
  NotImplementedError,
} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 * {
     value = x;
      next = null;
    }
 */
class Queue {
  constructor() {
    this.arr;
  }

  getUnderlyingList() {
    return this.arr;
  }

  enqueue(value1) {
    if (!this.arr) {
      this.arr = {
        value: value1,
        next: null,
      };
    } else {
      this.last(this.arr).next = {
        value: value1,
        next: null,
      };
    }
  }
  last(result) {
    if (!result.next) {
      return result;
    }

    return this.last(result.next);
  }
  dequeue() {
    let value = this.arr.value;
    this.arr = this.arr.next;
    return value;
  }
}

module.exports = {
  Queue,
};
