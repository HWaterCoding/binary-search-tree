//entry point
import Tree from "./tree.js";


// ======= tree creation ======= //

const binaryTree = new Tree([3, 3, 9, 6, 1, 4, 7, 10, 8, 5]);
// const smallTree = new Tree([3, 7]);


// ======== node existence check ========= //

//includes()
// console.log(binaryTree.includes(6)); //true
// console.log(binaryTree.includes(17)); //false


// ======== node insertion ======== //

//insert() new value
binaryTree.insert(2);
binaryTree.insert(12);

//insert() duplicate value
binaryTree.insert(7);


// ======== node deletion ========= //

//no child deletion
// binaryTree.deleteItem(7);

//one child deletion
// binaryTree.deleteItem(9);

//two children deletion
// binaryTree.deleteItem(8);

//root node deletion
// binaryTree.deleteItem(6);

//small tree node deletion
// smallTree.deleteItem(3);
// smallTree.deleteItem(7);


// ========= tree traversals ========= //

//callback function for traversals
// function printValue(value){
//     console.log(value);
// }

//levelOrderForEach() callback function
// binaryTree.levelOrderForEach(printValue);

//inOrderForEach() traversal
// binaryTree.inOrderForEach(printValue);

//preOrderForEach() traversal
// binaryTree.preOrderForEach(printValue);

//postOrderForEach() traversal
// binaryTree.postOrderForEach(printValue);


// ======= height + depth ======== //

//height() function
// console.log(binaryTree.height(77)); //undefined
// console.log(binaryTree.height(6)); //4

//depth() function
// console.log(binaryTree.depth(8)); //1
// console.log(binaryTree.depth(12)); //4


// ====== balanced check + rebalance tree ======= //

//check to see if current tree is balanced
console.log(binaryTree.isBalanced());

//rebalance function to rebalance the tree
binaryTree.rebalance();


//print entire tree
binaryTree.prettyPrint();
// smallTree.prettyPrint();






//driver script:
//create getArray() function to produce a random array with each value < 100
//create  abinary tree from the array
//confirm the created tree is properly balanced with isBalanced()
//print the tree in levelOrder, preOrder, postOrder, and inOrder.
//unbalance the tree by adding many values > 100
//confirm the tree is unbalanced with isBalanced()
//rebalance() the tree
//reconfirm the tree is balanced
//and once again print all values in each traversal