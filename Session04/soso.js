// 증감 버튼 실습

// const countDisplay = document.getElementById("count");
// const increaseBtn = document.getElementById("increase");
// const decreaseBtn = document.getElementById("decrease");

// let count = 0;

// increaseBtn.addEventListener("click", () => {
//     count++;
//     countDisplay.textContent = count;
// })

// decreaseBtn.addEventListener("click", () => {
//     count--;
//     countDisplay.textContent = count;
// })

//------------------------------------------------------------------------

// 버튼의 형태가 바뀌는 것이므로 css에서 불러와야 함 -> query 사용

const foodButton = document.querySelectorAll(".food");
const SubmitButton = document.querySelector(".submit");

SubmitButton.disabled = true;

foodButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("selected");
        updateSubmit();
    })
})


function updateSubmit(){
    const selected = document.querySelectorAll(".food.selected");
    const isActive = selected.length > 0;

    SubmitButton.disabled = !isActive;

    if (isActive) {
        SubmitButton.classList.add("selected");
    } else {
        SubmitButton.classList.remove("selected");
    }
};

SubmitButton.addEventListener("click", () => {
    const selected = document.querySelectorAll(".food.selected");
    const selectedFoods = Array.from(selected).map(btn => btn.textContent); //버튼에서 텍스트만 가져옴.

    console.log("선택한 음식: " + selectedFoods);
})

//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------