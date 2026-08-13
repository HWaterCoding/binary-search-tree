//entry point
import Tree from "./tree.js";

const binaryTree = new Tree([3, 3, 9, 6, 1, 4, 7, 10, 8, 5]);

//includes()
// console.log(binaryTree.includes(6));
// console.log(binaryTree.includes(17));

//insert()
binaryTree.insert(2);
binaryTree.insert(0);
binaryTree.insert(7);

//no child deletion
// binaryTree.deleteItem(10);
// binaryTree.deleteItem(7);

//one child deletion
// binaryTree.deleteItem(9);

//two children deletion
binaryTree.deleteItem(8);

//root node deletion
// binaryTree.deleteItem(6);

//print entire tree
binaryTree.prettyPrint();
