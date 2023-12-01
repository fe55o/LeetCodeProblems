/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashTableValues = {}
    
    for(let i=0; i<nums.length;i++){
        // if there no key with this number
        if(!hashTableValues[nums[i]]){
            // add this number to check on it later
            hashTableValues[nums[i]] = true
        }
        else {
            // the number already exists
        return true
        }
    }
    return false
};