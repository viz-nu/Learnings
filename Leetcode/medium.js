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



// 56. Merge Intervals

// const merge = function (intervals) {
//     intervals.sort((a, b) => a[0] - b[0])
//     for (let i = 0; i < intervals.length; i++) {
//         let up = overlap(intervals[i], intervals[i + 1])

//         if (up) {
//             intervals.splice(i, 1);
//             intervals[i] = up;
//             i--;

//         }
//     }

//     function overlap(arr1, arr2) {
//         if (!arr2 ) return false
//         if (arr1[1] >= arr2[0]) {
//             return (arr1[1] >= arr2[1]) ? arr1 : [arr1[0], arr2[1]]
//         }
//         else return false
//     }
//     return intervals
// };
// console.log(merge([[1, 3], [8, 10], [2, 6], [15, 18]]));



// 438. Find All Anagrams in a String

// const findAnagrams = function (s, p) {
//     let ar = []
//     for (let i = 0; i < s.length; i++) {
//         let str = s.substr(i, p.length)
//         if (isAnagram(str, p)) { ar.push(i) }
//     }
//     return ar
//     function isAnagram(str, p) {
//         str = str.split("").sort().join("");
//         p = p.split("").sort().join("");
//         return (str == p) ? true : false
//     }
// };
// console.log(findAnagrams("abab", "ab"));

  // 12. Integer to Roman
// const intToRoman = function (num) {
//   const roman = new Map([
//     [1, "I"],
//     [4, "IV"],
//     [5, "V"],
//     [9, "IX"],
//     [10, "X"],
//     [40, "XL"],
//     [50, "L"],
//     [90, "XC"],
//     [100, "C"],
//     [400, "CD"],
//     [500, "D"],
//     [900, "CM"],
//     [1000, "M"]
//   ]);
//   let denom = ""
//   if (num >= 1000) {
//     let q = Math.floor(num / 1000)
//     num = num % 1000
//     while (q) {
//       denom += `${roman.get(1000)}`
//       q--
//     }
//   }
//   if (num >= 900) {
//     denom += `${roman.get(900)}`
//     num = num % 900
//   }
//   if (num >= 500) {
//     denom += `${roman.get(500)}`
//     num = num % 500
//   }
//   if (num >= 400) {
//     denom += `${roman.get(400)}`
//     num = num % 400
//   }
//   if (num >= 100) {
//     let q = Math.floor(num / 100)
//     num = num % 100
//     while (q) {
//       denom += `${roman.get(100)}`
//       q--
//     }
//   }
//   if (num >= 90) {
//     denom += `${roman.get(90)}`
//     num = num % 90
//   }
//   if (num >= 50) {
//     denom += `${roman.get(50)}`
//     num = num % 50
//   }
//   if (num >= 40) {
//     denom += `${roman.get(40)}`
//     num = num % 40
//   }
//   if (num >= 10) {
//     let q = Math.floor(num / 10)
//     num = num % 10
    
//     while (q) {
//       denom += `${roman.get(10)}`
//       q--
//     }
//   }
//   if (num >= 9) {
//     denom += `${roman.get(9)}`
//     num = num % 9
//   }
//   if (num >= 5) {
//     denom += `${roman.get(5)}`
//     num = num % 5
//   }
//   if (num >= 4) {
//     denom += `${roman.get(4)}`
//     num = num % 4
//   }
//   if (num >= 1) {
//     let q = num
//     while (q) {
//       denom += `${roman.get(1)}`
//       q--
//     }
//   }
//   return denom
// }
// console.log(intToRoman(283));


//215. Kth Largest Element in an Array
// const findKthLargest = function(nums, k) {
//   return [...new Set(nums)].sort((item1,item2) => item2-item1)[k-1]
// };
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));


// 204. Count Primes
// const countPrimes = function(n) {
// let c=0
// n--
//   while(n){
//     if (n==2) c++
//     if ( n%2!=0  && isPrime(n)) c++
//     n--
//   }
//   return c
//     function isPrime(n) {
//       if(n<2) return false
//       if(n==2) return true
//       for (let i = 2; i < n-1; i++) if (n%i==0) return false
//       return true
//     }
// };
// console.log(countPrimes(10));

