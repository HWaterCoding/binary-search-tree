//entry point
import Tree from "./tree.js";

const binaryTree = new Tree([3, 3, 9, 6, 5, 1, 4, 2, 7, 10, 8]);

//print node structure from root
console.log(binaryTree.root);

//print entire tree
binaryTree.prettyPrint();