/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root==null){
        return [];
    }
    let qu=[root];
    let ans=[];

    while(qu.length>0){
     let levelheight=qu.length;
     let level=[];

     for(let i=0;i<levelheight;i++){
        let node=qu.shift();

        level.push(node.val);

        if (node.left !== null) {
                qu.push(node.left);
            }

            if (node.right !== null) {
                qu.push(node.right);
            }
        }

        ans.push(level);
    }

    return ans;
};