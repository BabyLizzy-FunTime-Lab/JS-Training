function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

Node.prototype.print = function(depth) {
  function printIndented(depth, value) {
    const LEVEL_INDENT = 4;
    console.log(' '.repeat(depth * LEVEL_INDENT), value);
  }

  if (!depth) {
    // if this function was called without parameters, depth will be 'undefined'
    depth = 0;
  }
  // it can also be written as: depth = depth || 0;

  printIndented(depth, this.value);

  if (this.left) {
    this.left.print(depth + 1);
  }
  else {
    printIndented(depth + 1, null);
  }

  if (this.right) {
    this.right.print(depth + 1);
  }
  else {
    printIndented(depth + 1, null);
  }
};

Node.prototype.insert = function(value) {
  if (this.value <= value) {
    if (this.right) {
      return this.right.insert(value);
    }
    else {
      this.right = new Node(value, null, null);
      return this.right;
    }
  }
  else {
    if (this.left) {
      return this.left.insert(value);
    }
    else {
      this.left = new Node(value, null, null);
      return this.left;
    }
  }
};

Node.prototype.find = function(value) {
  if (this.value === value) {
    return this;
  }
  else if (this.value < value) {
    if (this.right) {
      return this.right.find(value);
    }
    else {
      return null;
    }
  }
  else { // this.value > value
    if (this.left) {
      return this.left.find(value);
    }
    else {
      return null;
    }
  }
};

let tree = new Node(15, null, null);
tree.insert(12);
tree.insert(18);
tree.insert(17);
tree.insert(-2);
tree.insert(0);

console.log(tree.find(3));
console.log(tree.find(17));
tree.print();