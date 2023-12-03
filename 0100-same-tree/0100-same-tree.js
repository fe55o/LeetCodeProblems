/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var queue1 = []
    queue1.push(p)
    var queue2 = []
    queue2.push(q)
    while(queue1.length != 0){
        p = queue1.shift()
        q = queue2.shift()
        if((p == null) ^ (q == null))
            return false
        if((p == null) && (q == null))
            continue;
        if(p.val != q.val)
            return false
        if(p.left != null && q.left != null){
            queue1.push(p.left)
            queue2.push(q.left)
        }
        if(p.right != null && q.right != null){
            queue1.push(p.right)
            queue2.push(q.right)
        }
        if(p.right == null && q.right != null){return false}
        if(p.left == null && q.left != null){return false}
        if(q.right == null && p.right != null){return false}
        if(q.left == null && p.left != null){return false}
    }
    return true
};
