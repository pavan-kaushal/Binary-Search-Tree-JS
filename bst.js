var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var radius=30


class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
        this.hash="";
        this.position={ x:0 , y:0 };
        
    } 
} 
class BinarySearchTree 
{ 
    constructor() 
    { 
        this.root = null; 
        
    } 
    insert(value) 
    { 
        
        var newNode = new Node(value); 
                          
        if(this.root === null) {
            this.root = newNode;
            newNode.position={ x:700 , y:40 }
        } 
        else{
            //this.insertNode(this.root, newNode); 
            var temp=this.root;
            while(temp!=null){
                console.log("( ",newNode.data,"<",temp.data," ) : ",value<temp.data,typeof(value))
                if(Boolean(value<temp.data)){
                    var parent=temp;
                    temp=temp.left;//left
                    console.log("left for ",newNode.data);
                }
                else{
                    var parent=temp;
                    temp=temp.right;//right
                    console.log("right for ",newNode.data);

                }
            }
            if(Boolean(value<parent.data)){//left
                parent.left=newNode;
                newNode.position={ x:parent.position.y+parent.position.x-300 , y:parent.position.y+70 }; 
            }
            else{//right
                parent.right=newNode;
                newNode.position={ x:parent.position.x-parent.position.y+300 , y:parent.position.y+70 };
            }
        }
    } 

 

    remove(data) 
   { 
    this.root = this.removeNode(this.root, data); 
    
   } 
  
removeNode(node, key) 
{ 
          
    if(node === null) {
        alert("Invalid Node Data : "+key);
        return null; 
    }
    else if(key < node.data) 
    { 
        node.left = this.removeNode(node.left, key); 
        return node; 
    } 
  
    else if(key > node.data) 
    { 
        node.right = this.removeNode(node.right, key); 
        return node; 
    } 
  
    //node.data==key
    else
    { 
        //deleting node with no children
        if(node.left === null && node.right === null) 
        { 
            node = null; 
            return node; 
        } 
  
        // deleting node with one children 
        if(node.left === null) 
        { 
            console.log("")
            node = node.right;
            return node; 
        } 
          
        else if(node.right === null) 
        { 
            node = node.left; 
            return node; 
        } 
  
        // Deleting node with two children  
        var aux = this.findMinNode(node.right); 
        node.data = aux.data; 
  
        node.right = this.removeNode(node.right, aux.data); 
        return node; 
    } 
  
} 



removeByHash(hash){
    var node=this.root;
    if(hash==""){
        this.remove(node,node.data);
        return;
    }
    for (var i = 0; i < hash.length; i++) {
        if(i==hash.length-1){
            var par=node;
        }
        if(hash.charAt(i)=="0"){
            console.log("Left----")
            node=node.left;
        }
        else if(hash.charAt(i)=="1") {
            console.log("Right----")
            node=node.right;
        }
        else{
            alert("Hash Must Contain Only 1's and 0's");
            return;
        }
        if(node==null){
            alert("Invalid Hash : "+hash);
            return;
        }
        }
        console.log("remove by hash: ",node.hash," node : ",node);

        //-------no child( leaf nodes )-------//
        if(node.left==null && node.right==null){
            if(par.left==node){
                par.left=null
            }
            if(par.right==node){
                par.right=null
            }
            node=null
            return;
        }
        ///////////////////////////////////////

        //--------------single child----------------//
        if(node.right==null){
            
            console.log("left changed to : ",node)
            if(par.left==node){
                par.left=node.left
            }
            if(par.right==node){
                par.right=node.left
            }
            node=null;
            return;

        }
        else if(node.left==null){
            
            console.log("right changed to : ",node)
            if(par.left==node){
                par.left=node.right
            }
            if(par.right==node){
                par.right=node.right
            }
            node=null;
            return;

        }
        ////////////////////////////////////////////

        //------------------two children---------------//
        else{
            var parent=node;
            var succesor=node.right;
            while(succesor.left!=null){
                parent=succesor;
                succesor=succesor.left;
            }

            if(parent!=node)
                parent.left=succesor.right;
            else
                parent.right=succesor.right;
            node.data=succesor.data;
            return;
        }

        /////////////////////////////////////////////////


    
    
      
}

findMinNode(node) 
{ 
    
    if(node.left === null) 
        return node; 
    else
        return this.findMinNode(node.left); 
} 




getRootNode() 
{ 
    return this.root; 
} 

inorder(node) 
{
    this.root.hash="";

    if(node !== null) 
    { 
        
        if(node.left!=null){
        node.left.hash=node.hash+"0";
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle ="white";
        ctx.fill();
        ctx.moveTo(node.position.x, node.position.y);
        ctx.lineTo(node.left.position.x, node.left.position.y);
        ctx.stroke();
        }
        this.inorder(node.left); 
      
    ///////////////////////////////////////////////////////////////////////
    
        console.log(node.data,node.hash,node.position);
        ctx.beginPath();
        ctx.font = `15px Verdana`;
        ctx.arc(node.position.x,node.position.y , radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "#66ff00";
        ctx.fillStyle ="black";
        ctx.fill();
        ctx.stroke();
        ctx.strokeText(node.data, node.position.x-0.3*radius,node.position.y+0.3*radius);
        var col=node.hash==""?"red":"blue";
        ctx.strokeStyle = col;
        var text=node.hash==""?"root":node.hash;
        ctx.strokeText(text, node.position.x+1.1*radius,node.position.y-0.5*radius);
        console.log("children of ",node.data," : ",node.left,node.right)
   
    /////////////////////////////////////////////////////////////////////
        if(node.right!=null){
        node.right.hash=node.hash+"1";
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle ="white";
        ctx.fill();
        ctx.moveTo(node.position.x, node.position.y);
        ctx.lineTo(node.right.position.x, node.right.position.y);
        ctx.stroke();
        }
        this.inorder(node.right);
        
    } 
    
} 




} 




var slider = document.getElementById("myRange");

slider.oninput = function() {
    var output = document.getElementById("radius");
    output.innerHTML = slider.value;
  radius = this.value;
  console.log(radius);
  var root = BST.getRootNode(); 
  ctx.clearRect(0, 0, c.width, c.height);
  BST.inorder(root);
}

var BST = new BinarySearchTree(); 



//////////-------frontend functions-------////////////////////////////
 function insert_node(){
    if(document.getElementById("insert").value.trim()==""){
        alert("Value Can't be Empty!!")
        return;
    }
     BST.insert(parseInt(document.getElementById("insert").value.trim()))
     var root = BST.getRootNode(); 
    console.log("Root : ",root);
    ctx.clearRect(0, 0, c.width, c.height);
    BST.inorder(root);
}

function delete_node(){
    if(parseInt(document.getElementById("delete").value.trim()=="")){
        alert("Value Can't be Empty!!")
        return;
    }
    
    BST.remove(document.getElementById("delete").value)
    var root = BST.getRootNode();
    if(root==null){
        alert("Tree Empty!!")
        return;
    }
    console.log("Root : ",root);
    ctx.clearRect(0, 0, c.width, c.height);
    BST.inorder(root);
}

function delete_node_by_hash(){
    BST.removeByHash(document.getElementById("deleteByHash").value.trim())
    var root = BST.getRootNode(); 
    console.log("Root : ",root);
    ctx.clearRect(0, 0, c.width, c.height);
    BST.inorder(root);
}
///////////////////////////////////////////////////////////////////////////////
