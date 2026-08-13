class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default class Tree {
  constructor(arr) {
    this.root = this.#buildTree(arr);
  }

  //method to print entire BST to console
  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }

    this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }

  #buildTree(arr) {
    //remove duplicate values first
    const noDupes = [...new Set(arr)];

    //sort the array next
    const sortedArray = noDupes.sort((a, b) => a - b);

    //write recursive function to create BST
    function sortedToBST(arr, start, end) {
      //create base case for recursion
      if (start > end) return null;

      let mid = start + Math.floor((end - start) / 2);
      let root = new Node(arr[mid]);

      root.left = sortedToBST(arr, start, mid - 1);
      root.right = sortedToBST(arr, mid + 1, end);

      return root;
    }

    return sortedToBST(sortedArray, 0, sortedArray.length - 1);
  }

  includes(value) {
    //traverse through tree to find value
    let currentNode = this.root;

    while (currentNode !== null) {
      if (value === currentNode.data) {
        return true;
      }
      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  //rebuild the entire tree???
  insert(value) {
    //Check if value already exists. If it does, return null.
    if (this.includes(value)) return;

    const newNode = new Node(value);

    let currentNode = this.root;

    if (this.root === null) {
      this.root = newNode;
    }

    //compare the "value" to the node being iterated on; if it's smaller, go left, if bigger, go right.
    while (currentNode !== null) {
      if (value < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  deleteItem(value) {
    //if value doesn't exist, exit function
    if (!this.includes(value)) return;

    let currentNode = this.root;
    let lastNode;

    //loop through the binary tree
    while (currentNode !== null) {

      if (value === currentNode.data) {

        //if the node being removed has no children
        if (currentNode.right === null && currentNode.left === null) {
          //check if root node
          if(currentNode === this.root){
            this.root = null;
            return;
          }

          //verify if we are changing .left or .right to null value to remove node
          if (value > lastNode.data) {
            lastNode.right = null;
          } else if (value < lastNode.data) {
            lastNode.left = null;
          }
          return;
        }

        //if the node being removed has 1 child
        else if (
          (currentNode.right === null && currentNode.left !== null) ||
          (currentNode.left === null && currentNode.right !== null)
        ) {
          //check if root node
          if(currentNode === this.root){
            if(currentNode.right !== null){
              this.root = currentNode.right;
            } else if(currentNode.left !== null){
              this.root = currentNode.left;
            }
            return;
          }

          if (value > lastNode.data) {
            //append whichever node is !null
            if (currentNode.left !== null) {
              lastNode.right = currentNode.left;
            } else if (currentNode.right !== null) {
              lastNode.right = currentNode.right;
            }
          } else if (value < lastNode.data) {
            if (currentNode.left !== null) {
              lastNode.left = currentNode.left;
            } else if (currentNode.right !== null) {
              lastNode.left = currentNode.right;
            }
          }
          return;
        }

        //if the node being removed has two children
        else if (currentNode.right !== null && currentNode.left !== null) {
          //find successor: right tree ---> go all the way left (lowest value that's greater than deleted Node)
          let successorNode = currentNode.right;
          let parentOfSuccessor = currentNode;

          while (successorNode.left !== null) {
            parentOfSuccessor = successorNode;
            successorNode = successorNode.left;
          }

          //determine if node being deleted is left or right child or previous node
          currentNode.data = successorNode.data;

          //Is the successor the left child or right child of its parent?
          if(parentOfSuccessor.left === successorNode) {
            //the successor is the left child of the parent
            parentOfSuccessor.left = successorNode.right;
          } else{
            //the successor is the right child of the parent
            parentOfSuccessor.right = successorNode.right;
          }
          return;
        }
      }

      //compare value to currentNode. If smaller, go left. If bigger, go right.
      if (value < currentNode.data) {
        lastNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        lastNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }
}

//predecessor: left tree ---> go all the way right (highest value that's less than deleted Node)
