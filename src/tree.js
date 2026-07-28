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
        this.root = null;
    }

    buildTree(array){

    }

    includes(value){

    }

    insert(value){

    }

    deleteItem(value){
        
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
