# Binary-Search-Tree-JS
implementation of BST using JavaScript and HTML

# Features
### 1 . every element is uniquely identified by a hash
 * hash of root = ""
 * hash of left child = hash of parent + "0"
 * hash of right child = hash of parent + "1"
![Screenshot 2020-12-10 190013](https://user-images.githubusercontent.com/66527924/101778558-068ca080-3b1a-11eb-95da-df20aa687dc5.png)


### 2 . delete an element based on hash
![Screenshot 2020-12-10 190545](https://user-images.githubusercontent.com/66527924/101779196-ef01e780-3b1a-11eb-90da-2507d8aabac6.png)

![Screenshot 2020-12-10 190631](https://user-images.githubusercontent.com/66527924/101779200-f0331480-3b1a-11eb-8151-07d9e57bc9aa.png)


### 3 . delete an element based on value
![Screenshot 2020-12-10 190854](https://user-images.githubusercontent.com/66527924/101779454-4dc76100-3b1b-11eb-84a8-13dbd49224ff.png)

![del](https://user-images.githubusercontent.com/66527924/101779456-4e5ff780-3b1b-11eb-9b38-32c67c4f9074.png)

### 4 . range slider that varies the radius of every node upon silding

![range slider](https://user-images.githubusercontent.com/66527924/101781373-bb748c80-3b1d-11eb-88d6-3174cf1358d1.png)


### 5 . inorder function for displaying the Tree on HTML Canvas and resetting hashes after deletion and insertion
```javascript
inorder(node) 
{
    //node refers to root
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
```

## Checkout the Sample : [Here](https://binary-search-tree-js.herokuapp.com/)
