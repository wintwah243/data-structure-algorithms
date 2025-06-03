// Binary Search Tree 

// we will create Node class that can create a new tree node
// binary tree ရဲ့ structureတစ်ခုcreateလုပ်လိုက်မယ်
class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST{
    constructor(){
        this.root = null; // Initializes the tree
    }

    add(data){
        const node = this.root; 
        if(node == null){
            this.root = new Node(data); // first node becomes the root
            return;
        }else{
            const searchTree = function(node){
                // node is the current node and data is the value we're trying to insert
                if(data < node.data){ // cယ်ရင်leftဘက်ကိုသွားမယ်
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if(node.left !== null){ // leftဘက်မှာnullမဖြစ်နေဘူး/valueထည့်မရဘူးဆိုရင်recursive functionပြန်ခေါ်
                        return searchTree(node.left);
                    }
                }else if(data > node.data){ // ကြီးရင်rightဘက်ကိုသွားမယ်
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }else if(node.right !== null){
                        return searchTree(node.right); // rightဘက်မှာnullမဖြစ်နေဘူး/valueထည့်မရဘူးဆိုရင်recursive functionပြန်ခေါ်
                    }
                }else{
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    // method to find the smallest value
    findMin(){
        let current = this.root;
        while(current.left !== null){ // treeရဲ့leftဘက်မှာnullမဖြစ်မချင်းsmallest valueရှာမယ်
            current = current.left;
        }
        return current.data;
    }

    // method to find the largest value
    findMax(){
        let current = this.root;
        while(current.right !== null){ // // treeရဲ့rightဘက်မှာnullမဖြစ်မချင်းlargest valueရှာမယ်
            current = current.right;
        }
        return current.data;
    }

    // methos to searche for a node with the exact value
    find(data){
        let current = this.root;
        while(current.data !== data){ // မတွေ့မချငိးloopပတ်
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
            if(current === null){
                return null; // not found
            }
        }
        return current;
    }

    // methos to check if a value exists in the tree
    isPresent(data){
        let current = this.root;
        while(current){ // currentကnullမဖြစ်မချင်းloopပတ်
            if(data === current.data){ // check is the value is found
                return true;
            }
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }

    // method to delete a node and restructure the tree
    remove(data){
        const removeNode = function(node, data){
            if(node === null){
                return null;
            }
            if(data === node.data){
                //node has no children
                if(node.left == null && node.right == null){
                    return null;
                }
                // node has no left child
                if(node.left == null){
                    return node.right; // replacing this node with its right child
                }
                // node has no right child
                if(node.right == null){
                    return node.left;  // replacing this node with its left child
                }
                //node has two children
                var tempNode = node.right; // right nodeဘက်ကိုသွားမယ်
                while(tempNode.left !== null){ // find smallest in that right subtree
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }else if(data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            }else{
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
};

const bst = new BST();
bst.add(4); // root
bst.add(2); // left of 4
bst.add(6); // right of 4
bst.add(1); // left of 2
bst.add(3); // right of 2
bst.add(5); // left of 6
bst.add(7); // right of 6
bst.remove(4); // remove 4, replace with 5 which is smallest in right subtree
console.log(bst.findMin()); // 1
console.log(bst.findMax()); // 7
console.log(bst.findMax()); // 7
console.log(bst.isPresent(4)); // false
