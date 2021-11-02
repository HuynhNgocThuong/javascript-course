// 12-03: Setup linked list
// - createLinkedList()
// + insertHead
// + printList
function createLinkedList() {
  let head = null;
  let size = 0;

  // Insert Node at head position
  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = newNode;
      return;
    }
    // otherwise, linked list has some items
    newNode.next = head;
    head = newNode;
    size++;
  }

  // Insert Node at last position
  function insertLast(newData) {
    // Check if list is empty then last node is first node which will be head
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = newNode;
    } else {
      // if list is not empty traverse to last node
      let last = head;
      while (last.next) {
        last = last.next;
      }
      last.next = newNode;
    }
    size++;
  }

  function insertAt(data, index) {
    // check if index is valid
    if (index > 0 && index < size) {
      const newNode = {
        data: data,
        next: null,
      };
      if (index == 0) {
        head = newNode;
        return;
      }
      // create two variables to track previous and current node and will traverse the list upto given index
      // point the next of previous node to new node and next of new node to current node.
      let current, previous;

      current = head;
      let count = 0;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = newNode;
      newNode.next = current;
      size++;
    } else {
      console.log('You have entered an invalid index!!');
    }
  }

  function printList() {
    if (head == null) return;
    let current = head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }

  function getHead() {
    return head;
  }

  function getTail() {
    if (head == null) return null;
    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }
    return tail;
  }

  function findIndexByData(data) {
    if (head == null) return -1;

    let current = head;
    let index = 0;
    while (current != null) {
      if (current.data == data) return index;
      index++;
      current = current.next;
    }
    return -1;
  }
  function findWithCallback(callback) {
    if (head == null) return undefined;

    let current = head;
    while (current != null) {
      if (callback(current.data)) return current.data;
      current = current.next;
    }
    return undefined;
  }
  function removeHead() {
    if (head != null) head = head.next;
    return head;
  }
  function removeTail() {
    if (head == null) return null;
    if (head.next == null) {
      head = null;
      return head;
    }
    let secondLast = head;
    while (secondLast.next.next != null) {
      secondLast = secondLast.next;
    }
    secondLast.next = null;
    return head;
  }

  function removeAtPosition(position) {
    if (head == null) return null;
    if (head.next == null) {
      head = null;
      return head;
    }
    let prev = head;
    let curr = head;
    let index = 0;
    while (index < position && curr.next != null) {
      prev = curr;
      curr = curr.next;
      index++;
    }
    prev.next = curr.next;
    return head;
  }
  function some(isValidFn) {
    if (head == null) return false;
    let current = head;
    while (current != null) {
      if (isValidFn(current.data)) return true;

      // move to the next item
      current = current.next;
    }
  }
  function every(isValidFn) {
    if (head == null) return false;
    let current = head;
    while (current != null) {
      if (!isValidFn(current.data)) return false;
      // move to the next item
      current = current.next;
    }
    return true;
  }
  return {
    getHead,
    getTail,
    findIndexByData,
    findWithCallback,
    insertHead,
    insertLast,
    insertAt,
    removeHead,
    removeTail,
    removeAtPosition,
    some,
    every,
    printList,
  };
}
const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
numberLinkedList.removeAtPosition(3);
numberLinkedList.printList();
numberLinkedList.some((x) => x > 3);
numberLinkedList.every((x) => x > 3);
console.log('-------------------------');

const numberLinkedListLast = createLinkedList();
numberLinkedListLast.insertLast(5);
numberLinkedListLast.insertLast(4);
numberLinkedListLast.insertLast(3);
numberLinkedListLast.insertLast(2);
numberLinkedListLast.insertAt(33, 2);
numberLinkedListLast.insertLast(1);
numberLinkedListLast.printList();
console.log(numberLinkedListLast.findIndexByData(3));

console.log(numberLinkedList.findWithCallback((x) => x % 2 === 0)); // -->2
