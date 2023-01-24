//n bulbs which are either on or off ... if you switch 1 bulb you will have all the bulbs switched on next to it.. find number of minimum switches to turn it on...


// There is a battle between heroes and villains going on. You have M heroes, all of them have the same health H. There are N villains, health of the i-th villain is Vi.

// When a hero, with health H battles a villain with health Vi, one of the three scenarios can happen:

// if H > Vi: The villain is defeated, and the health of the hero is decreased by Vi if H < Vi: The villain wins, his health is not affected, and the hero is no longer able to fight. if H = Vi: Both are considered defeated, and neither can fight.

// The heroes start fighting villains one by one in the same order, first villain 1 then villain 2 and so on. It might be possible that before defeating all the villains, all the heroes are defeated. Therefore, to ensure the victory of the heroes, you want to remove some villains from the front.

// Your task is to find the minimum number of villains you need to remove from the front such that the victory of the heroes is guaranteed.

// Note: If in the last battle, both the hero and villain are defeated and no more heroes or villains remain, it would still be considered a victory since all the villains are defeated.

// Input Format

// N :: INTEGER
// The first line contains an integer, N, denoting the number of villains N :: 1 -> 2*10^5

// M :: INTEGER
// The next line contains an integer, M, denoting the number of heroes M :: 1 -> 2*10^5

// H :: INTEGER
// The next line contains an integer, H, denoting the health of each of the heroes H :: 1 -> 10^9

// array :: INTEGER ARRAY
// Each line i of the N subsequent lines (where 0 ≤ i < N) contains an integer describing the health of each of the villains.
// array[i] :: 1 -> 10^9


// let M = 3, H = 3
// let  V= [ 2, 3, 3]
// const battle = (V, M, H) => {
//     let counter=0
//     let goodHealth = M * H
//     let badHealth = V.reduce((acc, ele) =>  acc + ele , 0)
//     let strong = goodHealth-badHealth
    
//  while(strong<=0)
// {    V.sort((a,b)=>{a-b}).pop()
// badHealth = V.reduce((acc, ele) =>  acc + ele , 0)
// counter++
//  strong = goodHealth-badHealth
// }
// if (strong>0) {
//     return counter
// }

// }
// console.log(battle(V, M, H));


// Problem Statement :

// Today you decided to go to the gym. You currently have energy equal to E units. There are N exercises in the gym. Each of these exercises drains Ai amount of energy from your body.

// You feel tired if your energy reaches 0 or below. Calculate the minimum number of exercises you have to perform such that you become tired. Every unique exercise can only be performed at most 2 times as others also have to use the machines.

// If performing all the exercises does not make you feel tired, return -1.

// Input Format
// E :: INTEGER
// The first line contains an integer, E, denoting the Energy.
// E :: 1 -> 10^5

// N :: INTEGER
// The next line contains an integer, N, denoting the number of exercises. N :: 1 -> 10^5

// A :: INTEGER ARRAY
// Each line i of the N subsequent lines (where 0 ≤ i < N) contains an integer describing the amount of energy drained by i-th exercise.
// A[i] :: 1 -> 10^5


// const obj={
//     s:656835,d:6568,e:6546,a:556,t:6654,v:65546,z:621
// }
// let a=[],obj2={}
// for(let i in obj){
//  a.push({[i]:obj[i]})
// }
// a=a.sort((a,b)=>Object.values(a)-Object.values(b))
// a.forEach(e => {
//     obj2={...obj2,[Object.keys(e)]:Object.values(e)[0]} 
// });

// console.log(obj2);
