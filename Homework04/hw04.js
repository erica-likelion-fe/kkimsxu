const A = Math.floor(Math.random() * 100) + 1;
let chances = 10;

function checkNumber() {
    const inputElement = document.getElementById("user-input");
    const resultElement = document.getElementById("result");
    const chanceElement = document.getElementById("chance");

    const userGuess = parseInt(inputElement.value);

    if (isNaN(userGuess)) {
        resultElement.textContent = "숫자를 입력하세요!";
        return;
    }

    chances--;

    if (userGuess === A) {
        resultElement.textContent = `정답입니다! ${A}`;
        inputElement.disabled = true;
    } else if (userGuess < A) {
        resultElement.textContent = `${userGuess} 🔼 UP!`;
    } else {
        resultElement.textContent = `${userGuess} 🔽 DOWN!`;
    }

    chanceElement.textContent = `남은 기회: ${chances}`;

    if (chances === 0 && userGuess !== A) {
        resultElement.textContent = "실패! 정답은 " + A + "입니다.";
        inputElement.disabled = true;
    }

    inputElement.value = "";  // 입력창 비우기
}
