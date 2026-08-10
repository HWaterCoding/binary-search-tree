//entry point
import Tree from "./tree.js";

const binaryTree = new Tree([3, 3, 9, 6, 1, 4, 7, 10, 8, 5]);

//print node structure from root
// console.log(binaryTree.root);


console.log(binaryTree.includes(6));
console.log(binaryTree.includes(17));

binaryTree.insert(2);
binaryTree.insert(0);
binaryTree.insert(7);

//print entire tree
binaryTree.prettyPrint();