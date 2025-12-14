/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let isMatching = false;

    for(let i=0 ; i<nums.length; i++){
        isMatching = false
        for(let j = 0 ; j < nums.length ; j++){

            if(nums[j] === nums[i] && i != j){
                isMatching=true
                continue;
            }
        }
        if(isMatching == false){
        return nums[i]
        }
    }
};