// 3. Longest Substring Without Repeating Characters


// const lengthOfLongestSubstring = function (s) {
//     s = s.split("");
//     let a=[],c=0,substr="";
//     // if(s.length==0 || s.length ==1){return s.length}
//     for (let i = c; i < s.length; i++) {
//         if(!substr.includes(s[i])){
//             substr+=s[i];
//         }
//         if ((i==s.length-1) || (substr.includes(s[i]))){
           
//             a.push(substr);
//             substr=""
//             c++;
//             i=c;
//         }
//         console.log(substr);
//     }
//     return a
// };

// console.log(lengthOfLongestSubstring("abc"));




// 7. Reverse Integer

// const reverse = function (x) {
//     x += ""


//     if (x < 0) {
//         x = x.replace("-", "")
//         x = x.split("").reverse().join("")
//         if(x>=((2**31)-1)){return 0}
//         return  x * (-1)
//     }

//     x = x.split("").reverse().join("")
//     if(x>=((2**31)-1)){return 0}
//     return  (x * 1) 

// };
// console.log(reverse(153423646))


// 

//11. Container With Most Water

// const  maxArea = function(height) {
//     let ar=0,i=0,j=height.length-1
//     while (i<j) {
//         ar = Math.max(ar,(j-i)*(Math.min(height[i],height[j])))
//         height[i] <= height[j] ?  i++ : j--
//     }
//     return ar
// };

// 15. 3Sum

// const threeSum = function(nums) {
//     let combos = []
//   if(nums.length < 2) {
//     combos.length = 0
//   }

//   for(let i = 0; i <= nums.length; i++) {
//     for(let j = i + 1; j <= nums.length - 1; j++) {
//       for(let k = j + 1; k <= nums.length - 1; k++) {
//         if(nums[i]+ nums[j]+ nums[k]==0){
//             combos.push([nums[i], nums[j], nums[k]])
//         }
//       }
//     }
//   }
//   return combos
// };



