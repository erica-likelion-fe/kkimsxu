// let Ascore = {
//     name: 'A', 
//     k: 80, 
//     e: 39, 
//     m: 42, 
//     s: 98
// }

// let Bscore = {
//     name: 'B', 
//     k: 30, 
//     e: 99, 
//     m: 92, 
//     s: 88
// }

// console.log(Ascore.k)

// function getScore(score) {
//     const {name, k, e, m, s} = score;
//     const text = name + k + s;
//     console.log(text);
// }

// getScore(Ascore);

//------------------------------------------------------------------------


// prompt('입력하세요');

//------------------------------------------------------------------------

// let num = prompt("1부터 100까자의 숫자를 입력하세요.");
// let int_num = parseInt(num);

// if (num%2 == 0) {
//     console.log('짝수입니다.')
// } else {
//     console.log('홀수입니다.')
// }

// console.log(num);

//------------------------------------------------------------------------

// do {
//     console.log("무조건 한번은 실행")
// } while (false);

//------------------------------------------------------------------------

// for (let i = 2; i < 8; i++) {
//     console.log(i)
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let num of numbers) {
//     if (num%2 == 0){
//         console.log(num);
//     }
// }

// let even = [];

// for (let num of numbers) {
//     if (num % 2 == 0){
//         even.push(num);
//     }
// }

// console.log(even);

// let even2 = [];

// for (let num of numbers) {
//     if (num % 2 == 0){
//         even2.unshift(num);
//     }
// }

// console.log(even2);

// even2[2] = 2999;
// console.log(even2);

// even2.splice(1, 3, 3333);
// console.log(even2);

//------------------------------------------------------------------------

// function gugudan() {
//     for(let i = 1; i<=4; i++){
//         console.log(i*4)
//     }
// }

// console.log(gugudan())

// const gugudan = function () {
//     console.log(1*3)
// }

// gugudan()

// const gugudan = () => {
//     for (let i = 1; i <= 9; i++){
//         console.log(i*3)
//     }
// }

// gugudan()

//------------------------------------------------------------------------

// const input = prompt("숫자를 입력하세요.");
// const num = Number(input);

// function isPrime(n) {
//     if (n < 2) return false;
//     else {
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) {
//                 return false; 
//             }
//         }
//         return true;
//     }
// }

// if (isPrime(num)) {
//     console.log("소수입니다.")
// } else {
//     console.log("소수가 아닙니다. ")
// }

//------------------------------------------------------------------------

// const lion = {
//     name : '사자' 
// };

// const bravelion = {
//     ...lion,
//     attribute : 'brave' 
// };

// const bravelikelion = {
//     ...bravelion,
//     color : 'yellow' 
// };

// console.log(lion);
// console.log(bravelion);

//------------------------------------------------------------------------

// const bravelikelion = {
//     name: 'lion', 
//     attribute: 'brave', 
//     color : 'yellow' 
// };

// const {color, ...rest} = bravelikelion;

// console.log(rest);

// const num = [1, 2, 3, 4, 5];

// const [one, ...rest1] = num;
// console.log(rest1);

//------------------------------------------------------------------------

// let js_score = {
//     name: "js",
//     korean: 100, 
//     math: 100,
//     english: 100,
//     science: 30
// };

// let sb_score = {
//     name: "sb",
//     korean: 80,
//     math: 90,
//     englsih: 30,
//     science: 100
// };

// function print_score(score) {
//     const {name, korean, science, math} = score;
//     const text = name + '의 국어 점수는' + korean + '입니다.'
//     console.log(text);
// };

// print_score(js_score)


// let input = prompt("숫자를 입력하세요.")
// let num = parseInt(input)

// if (num % 2 == 0) {
//     console.log(num + "은 짝수입니다.")
// } else {
//     console.log("홀수입니다.")
// }

