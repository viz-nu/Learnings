//roman to int
//I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000



romanToInt("LXVIV");


function romanToInt(s) {
    const ref = [
        'I', 1,
        'V', 5,
        'X', 10,
        'L', 50,
        'C', 100,
        'D', 500,
        'M', 1000
    ];
    const a = s.split("");
    let b = a.map(ele => ref[ref.indexOf(ele) + 1]);
    b.push(0)
    console.log(b)
    let sum = 0;
    for (let i = 0; i < b.length - 1; i++) {

        if (b[i] >= b[i + 1]) sum = sum + b[i]; //3,65
        else sum = sum - b[i];
    };
    console.log(sum);
};
//[ 50, 10, 5, 1, 5, 0 ]
