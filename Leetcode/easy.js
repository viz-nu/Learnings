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

//happynumber
// const isHappy = function (n) {
//     if (n <= 10) {
//         return (n == 1 || n == 10) ? true : false
//     }
//     n = (n + "").split("").reduce((acc, ele) => acc + (ele) ** 2, 0)
//     return isHappy(n)

// };

// console.log(isHappy());

// 136. Single Number
// const singleNumber = function(nums) {
//     nums.sort();
//     let i=0;
//     while(nums.length>1){
//         if (nums[i]==nums[i+1]) {
//             nums.splice(i,2)
//             continue;
//         }
//         i++
//     }
//     return nums[0]
// };
// console.log(singleNumber([4,1,2,1,2]));
//125 Valid Palindrome

// let s="0P"
// const isPalindrome = function(s) {
//     s=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
//     let a=s.split("").reverse().join("")
//     return a==s ?  true : false

// };
// console.log(isPalindrome(s));

// 121 Best time to buy stocks
// const maxProfit = function(prices) {
// let profit=0
//     while (prices.length) {
//         let buy=prices[0]
// prices.shift()
// let sell=Math.max(...prices)

// profit=Math.max(profit,(sell-buy))

//     }
// return profit

// };




//412.FizzBuzz

// var fizzBuzz = function(n) {
//     a=[]
//     function fiz(i) {
//         if (i%3==0){
//             if(i%15==0){return"FizzBuzz"}
//             return"Fizz"}
//         else if (i%5==0){return"Buzz"}
//         else {return`${i}`}
//     }
//   for(let i=1;i<=n;i++){
//      a.push(fiz(i))
//   }  
//   return a
// };

// 169. Majority Element
// const majorityElement = function (nums) {
// rep=(e,arr)=>arr.filter(item=>e===item).length
// return [...new Set(nums.sort())].filter(ele=>rep(ele,nums)>nums.length/2)[0]
// };
// console.log(majorityElement([2,2,1,1,1,2,2]));

// 387. First Unique Character in a String

// const firstUniqChar = function (s) {
//     let dup=s
//     while (dup.length) {
//         let char = dup[0]
//         dup=dup.slice(1)
//         if (!(dup.includes(char))) {
//             return s.indexOf(char)
//         } else {
//             dup=dup.split(char).join("")
//         }
//     }
//     return -1
// }
// console.log(firstUniqChar("lleetcode"));



// 268. Missing Number
// const missingNumber = (nums) => {
//     nums.sort((a,b)=>a-b)
//     arr=(nums.filter((item,index) => item!=index))
// return arr[0] ? (arr[0]-1):nums.length
// };
// console.log(missingNumber([0, 1]));


// 344. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s
// var reverseString = function(s) {
//     return s.reverse()
//  };

// 350. Intersection of Two Arrays II
// const intersect = function(nums1, nums2) {
//     let arr1 = (nums1.length<=nums2.length)? nums1:nums2
//     let arr2 = (nums1.length<=nums2.length)? nums2:nums1
//     let arr=[]
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr2.includes(arr1[i])) {
//                 arr.push(arr1[i]);
//                 arr2.splice(arr2.indexOf(arr1[i]),1)
//             }

//         }


//       return arr
//   };
// console.log(intersect([1,2,2,1],[2,2]));

// 326. Power of Three

// const isPowerOfThree = function (n) {
//     if (n < 1) {
//         return false
//     }
//     while (n % 3 == 0 && n > 1) {

//         n = n / 3

//     }


//     return (n == 1) ? true : false

// };

// console.log(isPowerOfThree(129140162));


// 283. Move Zeroes



// const moveZeroes = function(nums) {

// let length=nums.length
// nums=nums.filter(item => item)
// while (nums.length<length) {
//     nums.push(0)
// }
// return nums
//    };



// console.log(moveZeroes([0,1,0,3,12]));

// 191. Number of 1 Bits


// const hammingWeight = function(n) {


//     return (n.toString(2).replace(/0/g,"").length)
// };
// console.log(hammingWeight(0b11111111111111111111111111111101));

// 190. Reverse Bits

// const reverseBits = function(n) {

//     return n.toString(2).split("").reverse().join("")
// };
// console.log(reverseBits(0b00000010100101000001111010011100));

//171. Excel Sheet Column Number
// const titleToNumber = function (columnTitle) {
//     let mapping = ["0","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//     columnTitle=columnTitle.split("").reverse()
//     let acc = 0
//     for (let i = 0; i < columnTitle.length; i++) {
//         acc+= mapping.indexOf(columnTitle[i]) * (26**i)
//         console.log(acc);
//     }
//     return acc




// };
// console.log(titleToNumber("AB"));


