// 13. Roman to Integer
//I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000



// romanToInt("LXVIV");


// function romanToInt(s) {
//     const ref = {
//         "O": 0,
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
// };
//     const a = s.split("");
//     a.push("O");

//     let sum = 0;
//     for(let i=0;i<a.length-1;i++) {
//         if (ref[a[i]]>=ref[a[i+1]]) sum = sum + ref[a[i]]
//         else sum = sum - ref[a[i]]

//     };

//     return (sum);
// };




// 14. Longest Common Prefix


// function longestCommonPrefix(strs) {
//     strs.sort()
//     let com=""
//     if(!strs[1]){return strs[0]}
//     for (let i = 0,j=0; i < strs[j].length; i++) {                                     
//         let element = strs[j][i];                                                     
//         c=com                                                                        
//         for (let k = 1; k < strs.length && strs[k][i]===element; k++) {       
//              if (k==(strs.length-1)) {com+=element; }                               
//         }
//         if(c==com){break}                                                            
//     }
//     return com;                                                                      
// };
// console.log(longestCommonPrefix(["f", "ff", "fff"]));


// 20. Valid Parentheses

// function isValid(s) {
//     s = s.split("")
//     const openers = "({[", closers = ")}]"
//     for (let i = 0; s.length; i++) {
//         if (openers.indexOf(s[i])>=0) {
//             continue;  
//         }
//         else if (closers.indexOf(s[i])>=0  && (openers.indexOf(s[i - 1]) == closers.indexOf(s[i]))) {
//             s.splice(i - 1, 2);
//             i=0;

//         }
//         else {break}

//     }

//     if (!s[0]) return true
//     else return false
// }

// console.log(isValid("(}"))






// 88. Merge Sorted Array
// var merge = function (nums1, m, nums2, n) {
//     nums1.push(...nums2);
//     nums1.sort((a, b) => a - b);
//     for (let i = 0; i < m+n; i++) {
//        if(nums1[i]===0){
//         nums1.splice(i,1);
//         i--;
//        }

//     }

//     //   nums1 =nums1.sort((a,b) => a-b).filter(item => item>0)
//     return (nums1);
// };
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 100, 54], 3));

// 1. Two Sum
// const twoSum = function(nums, target) {
//     let a=[]
// nums.forEach((element,index)=> {
//         for (let i = index+1; i < nums.length; i++) {
//             if (element+nums[i]==target) {a.push(index,i)}
//         }

//     })
//     return a
// };
// console.log(twoSum([2,7,2,1,8,6,3,11,15],9))


// 9. Palindrome Number
// const isPalindrome = function(x) {
//     x=x.toString()
//     let y=x.split("").reverse().join("")

//     return  (x===y) ? true :false

// };
// console.log(isPalindrome(54322345));




// 26. Remove Duplicates from Sorted Array

// const removeDuplicates = function(nums) {
//    var nums = [...new Set(nums)];
//     return nums.length
//   };
// const removeDuplicates = function(nums) {
//   return nums.filter((item,index) =>{ if(nums.indexOf(item)===index){return item}})
// };
// const removeDuplicates = function(nums) {
//     let a=[]
//    for(let i=0;i<nums.length;i++){
//        if (nums.indexOf(nums[i])===i){
//            a.push(nums[i])
//        }
//    }
//    return a
// };


// console.log(removeDuplicates(nums));


// const arr1=[1,3,4,2,5,7]
// const arr2=[1,3,6,9,20]
// const arr3=[1,3,11,21]
// let arr=[...new Set(arr1),...new Set(arr2),...new Set(arr3)]
// function intersection(arr) {
//     arr=arr.filter((ele,index)=>arr.indexOf(ele)!=index)
//     arr=arr.filter((ele,index)=>arr.indexOf(ele)!=index)
//     console.log(arr)
// }
// intersection(arr)

// const obj={
//     a:28,b:5,d:11,e:6
// }
// function objsorter(obj) {
//     for(let e in obj){

//     }
// }
// objsorter(obj)

// 69. Sqrt(x)

// const  mySqrt = function(x) {
//     for(let i=1;i<x;i++){
//         if(i*i==x) return i
//         if(i*i>x) return i-1
//     }
// };
// console.log(mySqrt(36));

// 73. Set Matrix Zeroes


// let a = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// const setZeroes = function (matrix) {

//    let zeroLocations = matrix.map((ele,index)=>{return findZero(ele)})
//     // return zeroLocations
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {

            
//        }
        
//     }



// };

// const findZero = (arr) => {
//     if (arr.indexOf(0)>-1) {
//       let a=[]
//         arr.forEach((ele, i) => {
//             if (ele === 0) { a.push(i) }
//         });
//         return a
//     }
//     else return false
// }
// console.log(setZeroes(a));


// 66. Plus One


// const plusOne = function(digits) {

//     return  (BigInt(digits.join(""))+1n+"").split("")
// };
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));