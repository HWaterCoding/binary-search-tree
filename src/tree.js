class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export default class Tree{
    constructor(arr){
        this.root = this.#buildTree(arr);
    }

    //method to print entire BST to console
    prettyPrint(node = this.root, prefix = '', isLeft = true){
        if (node === null || node === undefined) {
            return;
        }

        this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    };

    #buildTree(arr){
        
        //remove duplicate values first
        const noDupes = [...new Set(arr)];
        
        //sort the array next 
        const sortedArray = noDupes.sort((a, b) => a - b);

        //write recursive function to create BST
        function sortedToBST(arr, start, end){
            //create base case for recursion
            if(start > end) return null;

            let mid = start + Math.floor((end - start) / 2);
            let root = new Node(arr[mid]);

            root.left = sortedToBST(arr, start, mid - 1);
            root.right = sortedToBST(arr, mid + 1, end);

            return root;
        }

        return sortedToBST(sortedArray, 0, sortedArray.length - 1);
    }

    includes(value){
        //traverse through tree to find value
        let currentNode = this.root;
        
        while(currentNode !== null){
            if(value === currentNode.data){
                return true;
            }
            if(value < currentNode.data){
                currentNode = currentNode.left;
            } else if(value > currentNode.data){
                currentNode = currentNode.right;
            }
        }

        return false;
    }

    insert(value){
        //FIRST CHECK IF THE VALUE ALREADY EXISTS. IF IT DOES. RETURN EARLY.

        //loop through the tree. start at the root.

        //compare the "value" to the node being iterated on; if it's smaller, go left, if bigger, go right.

        //continue until you find a "null" spot where the node can be placed.

        //change that null value to the "value"

    }

    deleteItem(value){
        //MAYBE USE INCLUDES() METHOD TO FIRST CHECK IF THE VALUE EVEN EXISTS? IF IT DOESN'T, RETURN EARLY.

        //pass in a node to be deleted from the binary tree

        //loop through the binary tree

        //compare value to currentNode. If smaller, go left. If bigger, go right. 

        
        //multiple niche cases!!:

        //if NO children: simply remove the node.

        //if ONE child, remove passed in node and connects it's parent directly to it's one child in the same spot 

        //if TWO children, ...??? how to choose between which child takes its spot? <---- read up on this 

    }
}


//FUNCTION FOR GENERATING STRUCTURED LOOK AT TREE FORMAT IN CONSOLE

// prettyPrint(node, prefix = '', isLeft = true){
//     if (node === null || node === undefined) {
//         return;
//     }

//     prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
//     console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
//     prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
// };