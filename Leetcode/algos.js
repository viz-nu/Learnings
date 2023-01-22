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
// arr=num.split("")

//   return arr.reduce((acc,ele)=>{acc+=(ele*1)
//     return acc
//   },0)
// }

// console.log(sumOfdigits(54321));

// WAP to delete all the positive numbers from the arr

// const pos=(arr)=>{
//    arr= arr.filter(ele=>ele<=0)
//   return arr
// }

// console.log(pos([2,-1,-5.6,4,89,43,-35,09]));


// 5. WAP to remove duplicates from the given array?



// const pos=(arr)=>{
//    arr= [...new Set(arr)]
//   return arr
// }

// console.log(pos([2,21,-5.6,21,89,43,-5,09,2,34,43]));



// Fibinocci series?
// const febo=(n)=>{
// if (n<1){return "indvalid input"}
// let arr=[0,1];
// if (n==1){return arr[0]}
// else if (n==2){return arr}
// else { 
//     for(let i=2;i<n;i++){
//         arr.push(arr[i-1]+arr[i-2])
// }
// return arr
// }
// }
// console.log(febo(10));


// Armstrong/Narcisstic number or not?

// const Narcisstic=(n)=>{
// chars=n.toString(10).split("")

//     let sum = chars.reduce((acc,ele)=>acc += (ele)**chars.length,0);
//    if (sum==n) {return "It is a Narcisstic number"}

// return "It is not a Narcisstic number"
// }
// console.log(Narcisstic(100));

// Sum of the digits of given number?


// const sum=(n)=>{
// chars=n.toString(10).split("")

// return chars.reduce((acc,ele)=>acc += (ele*1),0);
// }
// console.log(sum(1634));

// Given an array of positive integer elements. Print out the count of Prime Numbers and
// Narcissistic numbers from the array and remove those elements from the array.

// function Isprime(n) {
// for (let i = 2; i < n; i++) {
//     if(n%i==0){return false}
// }
// return true
// }
// function IsNars(n) {
   
//         chars=n.toString(10).split("")
        
//             let sum = chars.reduce((acc,ele)=>acc += (ele)**chars.length,0);
//            if (sum==n) {return true}
//         return false
// }
// function arraymod(arr) {
// return arr.filter(ele=>{if(!Isprime(ele)&&!IsNars(ele)){return ele}})
// }
// console.log(arraymod([10, 20, 30, 40, 2, 5, 7, 153, 1024, 1634, 11]));


// WAP to Multiply two numbers without using multiplication symbol?
// const mult=(a,b)=>{
// for(sum=0;b>0;b--){sum+=a}
// return sum
// }
// console.log(mult(13,11));

// Write a function that pre-pends(adding as pre-fix) a zero to single digit numbers
// const zero=(arr)=>{
    
//     return arr.map((ele)=>{return (ele<10) ?  ("0"+ele) :  (ele) })
// }
// console.log(zero([5, 17, 3, 9, 98]));

// Write an algorithm to Split the Input String into two strings based on even and odd indexes.
// Left pad with '000' and right pad with '111' to the split string and display the output.

// const splitevenodd=(str)=>{
//     let even="000",odd="000"
// for (let i = 0; i < str.length; i++) {
//     ((i+1)%2==0)? odd+=str[i]:even+=str[i]
// }
// even+="111"
// odd+="111"
// console.log(even,odd);
// }
// splitevenodd("Hello there")

// .Split the array and add the first part to the end. There is a given array and split it from a
// specified position, and move the first part of array add to the end.
// Write a function that accepts an array and index position to split as arguments.

// const shiftEle=(arr,n)=>{
// let narr=arr.splice(n,arr.length-n)
// return [...narr,...arr]
// }
// console.log(shiftEle([12, 10, 5, 6, 52, 36],2));


// Defang IPv4 and Validate
// const validate=(str)=>{
// let arr=str.split(".").filter(ele=>ele>255)
// return arr.length ? "its an Invalid IP":"its valid IP"
// }
// console.log(validate("255.643.12.11"));

// Write an algorithm to convert 24 hours format time to 12 hours format time.
// const To12=(str)=>{
//    arr= str.split(":")
//     if(arr[0]<12){str+=" AM"} 
//     else{
//         arr[0]-=12;
//         str=arr.join(":")
//         str+=" PM"
//     }

//     return str
// }

// console.log(To12("5:30"));



// Phase 2

k