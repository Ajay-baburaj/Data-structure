let head = null;  // Initialize head pointer to null
let tail = null;  // Initialize tail pointer to null

class Node {
  constructor(data) {
    this.data = data;  // Data stored in the node
    this.next = null; // Pointer to the next node
    this.prev = null; // Pointer to the previous node
  }
}

function push(data) {
  const newNode = new Node(data);  // Create a new node with the given data

  if (head === null) {
    // If the list is empty
    head = newNode;  // Set the head pointer to the new node
    tail = newNode;  // Set the tail pointer to the new node
    newNode.next = newNode;  // Make the new node point to itself (circular)
    newNode.prev = newNode;  // Make the new node point to itself (circular)
  } else {
    // If the list is not empty
    newNode.next = head;  // Make the new node point to the current head node
    newNode.prev = tail;  // Make the new node point to the current tail node
    tail.next = newNode;  // Update the next pointer of the current tail node to the new node
    head.prev = newNode;  // Update the previous pointer of the current head node to the new node
    tail = newNode;  // Update the tail pointer to the new node
  }
}

function insertAfter(prev_node, data) {
  if (head === null) {
    // If the list is empty
    console.log("List is empty.");
    return;
  }

  let new_node = new Node(data);  // Create a new node with the given data
  let temp = head;  // Start traversal from the head node

  while (temp.data !== prev_node) {
    // Find the node with the data equal to prev_node
    temp = temp.next;
    if (temp === head) {
      // If we have looped back to the head node without finding prev_node
      console.log("Previous node not found.");
      return;
    }
  }

  new_node.next = temp.next;  // Set the next pointer of the new node
  temp.next.prev = new_node;  // Update the previous pointer of the next node
  new_node.prev = temp;  // Set the previous pointer of the new node
  temp.next = new_node;  // Update the next pointer of the previous node
}

function deleteNode(key) {
  if (head === null) {
    // If the list is empty
    console.log("List is empty.");
    return;
  }

  let temp = head;  // Start traversal from the head node
  let prev = null;  // Keep track of the previous node

  while (temp.data !== key) {
    // Find the node with the data equal to key
    prev = temp;
    temp = temp.next;
    if (temp === head) {
      // If we have looped back to the head node without finding the key
      console.log("Key not found.");
      return;
    }
  }

  if (temp === head && temp === tail) {
    // If there is only one node in the list
    head = null;
    tail = null;
  } else if (temp === head) {
    // If the node to be deleted is the head node
    head = temp.next;  // Update the head pointer
    head.prev = tail;  // Update the previous pointer of the new head node
    tail.next = head;  // Update the next pointer of the tail node
  } else if (temp === tail) {
    // If the node to be deleted is the tail node
    tail = prev;  // Update the tail pointer
    tail.next = head;  // Update the next pointer of the new tail node
    head.prev = tail;  // Update the previous pointer of the head node
  } else {
    // If the node to be deleted is in the middle of the list
    prev.next = temp.next;  // Update the next pointer of the previous node
    temp.next.prev = prev;  // Update the previous pointer of the next node
  }
}

function printList() {
  if (head === null) {
    // If the list is empty
    console.log("List is empty.");
    return;
  }

  let temp = head;  // Start traversal from the head node
  do {
    // Traverse the list until we reach the head node again
    console.log(temp.data);  // Print the data in the current node
    temp = temp.next;  // Move to the next node
  } while (temp !== head);
}

function ReversePrint() {
  if (head === null) {
    // If the list is empty
    console.log("List is empty.");
    return;
  }

  let temp = tail;  // Start traversal from the tail node
  do {
    // Traverse the list until we reach the tail node again
    console.log(temp.data);  // Print the data in the current node
    temp = temp.prev;  // Move to the previous node
  } while (temp !== tail);
}

push(2);
push(10);
push(8);
push(25);
deleteNode(2);

printList();
// ReversePrint();
