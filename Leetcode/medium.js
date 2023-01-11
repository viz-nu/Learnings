// 3. Longest Substring Without Repeating Characters


const lengthOfLongestSubstring = function (s) {
    s = s.split("");
    if (s.length == 0 || s.length == 1) { return s.length }
    if (s.length == 2) {
        if (s[0] == s[1]) { return 1 }
        else { return 2 }
    }
    let a = [], c = 0
    for (let i = 0; i < s.length; i++) {    //i=1 c=0
        if (s.indexOf(`${s[i]}`) !== i) {
            a.push(i - c)                       // 1 
            c = i
        }
        if (i == s.length - 1) {
            a.push(i - c)
        }
    }
    a.sort((item1, item2) => item2 - item1)
    return a[0]
};

console.log(lengthOfLongestSubstring("aab"));