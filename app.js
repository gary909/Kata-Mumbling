// function accum(s) {
//     // your code
//     s = s.toUpperCase();
//     var myStr = "";
//     for (let i = 0; i < s.length; i++) {
//         myStr = myStr + (s[i]).repeat(i) + '-';
//     }
//     return myStr.slice(0, -1);
// }

function accum(s) {
    let myArr = []
    let lowerStr = s.toLowerCase()

    for (let i = 0; i < lowerStr.length; i++) {
        let str = lowerStr[i].toUpperCase()
        for (let j = 0; j < i; j++) {
            str += lowerStr[i]
        }
        myArr.push(str)
    }

    return myArr.join("-")
}

console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("NyffsGeyylB")); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
console.log(accum("MjtkuBovqrU")); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
console.log(accum("EvidjUnokmM")); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
console.log(accum("HbideVbxncC")); // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"