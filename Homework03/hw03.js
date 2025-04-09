

const A = Math.floor(Math.random() * 100 +1);

function updown_game(num) {
    if (num == A) {
        alert("축하합니다! 정답입니다.")
        return true;
    } else if (num < A) {
        console.log("UP!")
    } else {
        console.log("DOWN!")
    }
    return false;
}

for (i = 10; i > 0; i--){
    let input = prompt("1부터 100 사이 숫자를 입력하세요 (남은 기회: " + i + ")");
    let number = parseInt(input);

    let isCorrect = updown_game(number);

    if (isCorrect) {
        break;
    }
    if (i == 1) {
        console.log("실패!")
    }
}

