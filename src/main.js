//entry point
import Tree from "./tree.js";

//INITIAL TESTINGS ---> UNCOMMENT AS ENTIRE BLOCK BELOW 

// //======= tree creation ======= //

// const binaryTree = new Tree([3, 3, 9, 6, 1, 4, 7, 10, 8, 5]);


// //======== node existence check ========= //

// //includes()
// console.log(binaryTree.includes(6)); //true
// console.log(binaryTree.includes(17)); //false


// //======== node insertion ======== //

// //insert() new value
// binaryTree.insert(2);
// binaryTree.insert(12);

// //insert() duplicate value
// binaryTree.insert(7);


// //======== node deletion ========= //

// //no child deletion
// binaryTree.deleteItem(7);

// //one child deletion
// binaryTree.deleteItem(9);

// //two children deletion
// binaryTree.deleteItem(8);

// //root node deletion
// binaryTree.deleteItem(6);


// //========= tree traversals ========= //

// //callback function for traversals
// function printValue(value){
//     console.log(value);
// }

// //levelOrderForEach() callback function
// binaryTree.levelOrderForEach(printValue);

// //inOrderForEach() traversal
// binaryTree.inOrderForEach(printValue);

// //preOrderForEach() traversal
// binaryTree.preOrderForEach(printValue);

// //postOrderForEach() traversal
// binaryTree.postOrderForEach(printValue);


// //======= height + depth ======== //

// //height() function
// console.log(binaryTree.height(77)); //undefined
// console.log(binaryTree.height(6)); //4

// //depth() function
// console.log(binaryTree.depth(8)); //1
// console.log(binaryTree.depth(12)); //4


// //====== balanced check + rebalance tree ======= //

// //check to see if current tree is balanced
// console.log(binaryTree.isBalanced());

// //rebalance function to rebalance the tree
// binaryTree.rebalance();


// //print entire tree
// binaryTree.prettyPrint();






//driver script:
//Create a randomized array, with random length and values less than 100.
function createRandomArray(){
    const randomArray = [];

    const randomLength = Math.floor(Math.random() * 100) + 1;

    for(let i = 0; i < randomLength; i++){
        const randomValue = Math.floor(Math.random() * 100);
        randomArray.push(randomValue);
    }

    return randomArray;
}

//callback function for traversals
function printValue(value){
    console.log(value);
}

//create a binary tree from the array
const tree = new Tree(createRandomArray());

//confirm the created tree is properly balanced with isBalanced()
console.log(tree.isBalanced());

//print the tree in levelOrder, preOrder, postOrder, and inOrder.
tree.levelOrderForEach(printValue);
tree.inOrderForEach(printValue);
tree.preOrderForEach(printValue);
tree.postOrderForEach(printValue);

//unbalance the tree by adding many values > 100
tree.insert(9999);
tree.insert(103);
tree.insert(69420);
tree.insert(420);
tree.insert(1000000);
tree.insert(911);

//confirm the tree is unbalanced with isBalanced()
console.log(tree.isBalanced());

//rebalance() the tree
tree.rebalance();

//reconfirm the tree is balanced
console.log(tree.isBalanced());

//and once again print all values in each traversal
tree.levelOrderForEach(printValue);
tree.inOrderForEach(printValue);
tree.preOrderForEach(printValue);
tree.postOrderForEach(printValue);

//print entire tree
tree.prettyPrint();