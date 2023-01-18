// asciii distance
// function ascii_deletion_distance(str1, str2) {
//     s=Math.max(str1.length, str2.length)
//   str1=str1.split("").sort()
//   str2=str2.split("").sort()
//   for(let i=0;i<s;i++){
//       char=str1[i]
//       index=str2.indexOf(char)
//       if(index>-1){
//          str1.splice(i, 1)
//          str2.splice(index, 1)
//             i--
//       }}
//       arr= [...str1,...str2]
//       const sum = arr.reduce((acc,ele)=>{return acc+ele.charCodeAt()},0)
//   return sum
// }
// console.log(ascii_deletion_distance("catz", "catb"))

// function interleave(str1, str2) {
//     s=Math.max(str1.length, str2.length)
//     a=[]
//   for(let i=0;i<s;i++){
//       if(str1[i]) a.push(str1[i])

//       if(str2[i]) a.push(str2[i])
//   }
//   return a.join("")
// }
// console.log(interleave("catehsgd", "123564122463154"))

// Find the cube root of a number ?
// const cuberoot=(a)=>{return a**(1/3)}
// console.log(cuberoot(27))

// Write a program that will accept the base and height of a triangle and compute the area?

// const areaOfTri=(a,b)=>{
//   return 0.5*a*b
// }
// console.log(areaOfTri(10,10))


// Write a program to compute the distance between the points (x1, y1) and (x2, y2)?

// const distance = (x1, y1, x2, y2) => {
//   return (((x1 - x2) ** 2) + ((y1 - y2) ** 2)) ** 0.5
// }
// console.log(distance(0, 0, 1, 1));


// Write a program to calculate body mass index?

// const BMI = (weight, height) => {
// return weight/(height**2)

// }
// console.log(BMI(70, 1.7));



// Write a program to filter the positive numbers from a list?


// const pos=(arr)=>{
//   return arr.filter(ele=>ele>=0)
// }

// console.log(pos([2,4,5,-3,5,-6,-9,-43]));



// Write a program to test whether a passed letter is a vowel or not?


// const vowel=(char)=>{
//   list="aeiou"
//   return (list.includes(char)? "It is a vowel":"It is not a vowel" )
// }
// console.log(vowel("g"));


// WAP to Check whether given year is a leap year or not?

// const LeapTest=(year)=>{
//   return (year%4==0 &&year%100!=0)? "It is a leap year":"It is not a leap year"
// }
// console.log(LeapTest(2000));

// WAP to check whether given string is a palindrome or not?
// const palindromeTest=(str)=>{
//  let str1=str.split("").reverse().join("")


//   return (str1===str)? "It is a Palindrome":"It is not a Palindrome"
// }
// console.log(palindromeTest("MADDAM"));


// 3. WAP to find sum of all the digits of given input number?


// const sumOfdigits=(num)=>{
// num+=""
//   arr=num.split("")

//   return arr.reduce((acc,ele)=>{acc+=(ele*1)
//     return acc
//   },0)
// }

// console.log(sumOfdigits(54321));