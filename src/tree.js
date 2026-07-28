class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export default class Tree{
    constructor(arr){
        this.arr = arr;
        this.root = null; //use return value of buildTree()
    }

    buildTree(array){
        //remove duplicate values first
        //sort the array next 
        //write recursive function to create BST
        //return the level-0 root node


        //make this function private 
    }

    includes(value){
        //traverse through tree to find value
        //if value... true
        //if no value... false
    }

    insert(value){
        //insert a new node in pre-existing binary tree.
        //loop through the tree. start at the root.
        //compare the "value" to the node being iterated on; if it's smaller, go left, if bigger, go right.
        //continue until you find a "null" spot where the node can be placed.
        //change that null value to the "value"
    }

    deleteItem(value){
        //pass in a node to be deleted from the binary tree
        //loop through the binary tree
        //multiple niche cases!!:
        //if NO children: simply remove the node.
        //if ONE child, remove passed in node and connects it's parent directly to it's one child in the same spot 
        //if TWO children, ...??? how to choose between which child takes its spot? <---- read up on this 
    }
}


//FUNCTION FOR GENERATING STRUCTURED LOOK AT TREE FORMAT IN CONSOLE

// const prettyPrint = (node, prefix = '', isLeft = true) => {
//     if (node === null || node === undefined) {
//         return;
//     }

//     prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
//     console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
//     prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
// }
