const nextStepBtn = document.querySelector(".next-step-btn")
const goBackBtn = document.querySelector(".go-back-btn")
const confirmBtn = document.querySelector(".confirm-btn")

const firstStep = document.querySelector(".first-step")
const secondStep = document.querySelector(".second-step")
const thirdStep = document.querySelector(".third-step")
const fourthStep = document.querySelector(".fourth-step")

const fieldset = document.querySelectorAll(".fieldset")

const formSteps = document.querySelectorAll(".step-number")
const main = document.querySelector(".main");

let counter = 0;
nextStepBtn.addEventListener('click', () => {
    counter = counter + 1;
    if(counter > 3) {
        counter = 3;
    }
    // fieldset[counter].classList.add("active");
    // !fieldset[counter].classList.add("hidden");
    if(counter === 1) {
        firstStep.classList.remove("show");
        secondStep.classList.add("show");
        goBackBtn.classList.add("show");
        formSteps[0].classList.remove("selected");
        formSteps[1].classList.add("selected");
    }
    if(counter === 2) {
        secondStep.classList.remove("show");
        thirdStep.classList.add("show");
        formSteps[1].classList.remove("selected");
        formSteps[2].classList.add("selected");
    }
    if(counter === 3) {
        thirdStep.classList.remove("show");
        fourthStep.classList.add("show");
        nextStepBtn.classList.add("hidden");
        confirmBtn.classList.add("active");
        formSteps[2].classList.remove("selected");
        formSteps[3].classList.add("selected");
    }
    console.log("Counter: " + counter);
})

goBackBtn.addEventListener('click', () => {
    counter = counter - 1;
    if(counter < 0) {
        counter = 0;
    }
    if(counter === 0) {
        firstStep.classList.add("show");
        secondStep.classList.remove("show");
        goBackBtn.classList.remove("show");
        formSteps[1].classList.remove("selected");
        formSteps[0].classList.add("selected");
    }
    if(counter === 1) {
        secondStep.classList.add("show");
        thirdStep.classList.remove("show");
        formSteps[2].classList.remove("selected");
        formSteps[1].classList.add("selected");
    }
    if(counter === 2) {
        thirdStep.classList.add("show");
        fourthStep.classList.remove("show");
        nextStepBtn.classList.remove("hidden");
        confirmBtn.classList.remove("active");
        formSteps[3].classList.remove("selected");
        formSteps[2].classList.add("selected");
    }
})