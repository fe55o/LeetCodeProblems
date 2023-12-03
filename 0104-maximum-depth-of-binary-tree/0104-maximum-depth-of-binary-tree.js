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
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 1
    const dfs = (root, level)=>{
        console.log(root,"--",level)
        // in case it reached a new level, to not overwrite with a less number 
        if(level > depth)
            depth = level
        // base condition to end the recursion
        if(root == null)
            return
        
         dfs(root.left, level = level+1)
         dfs(root.right,level = level)
    }
    dfs(root,depth)
    console.log(depth)

   return depth-1
};