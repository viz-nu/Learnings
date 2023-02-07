// 904. Fruit Into Baskets
// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.


// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].


// code:

// const totalFruit = function (fruits) {
    // let ref = [], seq = 0
    // let num = 2
    // for (let i = 0; i < fruits.length; i++) {
    //     if (ref.length == 2) {
    //         if (!ref.includes(fruits[i])) {
    //             seq=Math.max(num,seq);
    //             num = 2;
    //             ref[0] = fruits[i]

    //         }
    //         else num++
    //     }

    //     else if(!ref.includes(fruits[i])) ref.push(fruits[i])
    //     else num++


    //     console.log(seq,ref,num);
    //     if (i==fruits.length-1) {
    //         seq=Math.max(num,seq);
    //     }

    // }

    // return seq


// };



const totalFruit = function (fruits) {
    let n =fruits.length
    if (n < 3) {
         return n
     }
     let ref = [], Max = 2
     for (let i = 0; i < n; i++) {
         if (canAdd(ref, fruits[i])) ref.push(fruits[i]) 
         else {
             Max = Math.max(ref.length, Max)
             let char = [ref[ref.length - 1]]
             for (let j = ref.length - 2; j > -1; j--) {
                 if ((char[0] === ref[j])) char.push(ref[j])
                 else break
 
             }
             char.push(fruits[i])
             ref=char
             console.log(ref,Max);
         }
     }
     Max = Math.max(ref.length, Max)
     return Max
    function canAdd(arr, ele) {
    let narr = [...new Set(arr)]
    return ((narr.length <= 1) || narr.includes(ele)) ? true : false
}
}
