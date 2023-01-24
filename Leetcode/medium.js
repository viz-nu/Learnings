// 3. Longest Substring Without Repeating Characters


const lengthOfLongestSubstring = function (s) {
    s = s.split("");
    let a=[],c=0,substr="";
    // if(s.length==0 || s.length ==1){return s.length}
    for (let i = c; i < s.length; i++) {
        if(!substr.includes(s[i])){
            substr+=s[i];
        }
        if ((i==s.length-1) || (substr.includes(s[i]))){
           
            a.push(substr);
            substr=""
            c++;
            i=c;
        }
        console.log(substr);
    }
    return a
};

console.log(lengthOfLongestSubstring("abc"));




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