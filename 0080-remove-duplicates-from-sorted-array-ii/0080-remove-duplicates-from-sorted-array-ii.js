/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let flag=0
    for(let i=0;i<nums.length;i++){
        console.log(i,flag,nums[i] == nums[i+1] == nums[i+2] )
        if(nums[i] == nums[i+1] && flag == 1){
            nums.splice(i,1)
            flag=0
            i--
        }
        if(nums[i] == nums[i+1] && nums[i+1] == nums[i+2])
            flag=1

    }
};