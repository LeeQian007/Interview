const reverseLink = (head) => {
  let prev = null;
  let curr = head;

  while (curr) {
    let nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }
  return prev;
};
