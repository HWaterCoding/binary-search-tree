//entry point
import Tree from "./tree.js";

const binaryTree = new Tree([3, 3, 9, 6, 1, 4, 2, 7, 10, 8, 5]);

//print node structure from root
// console.log(binaryTree.root);

//print entire tree
binaryTree.prettyPrint();

console.log(binaryTree.includes(6));
console.log(binaryTree.includes(17));