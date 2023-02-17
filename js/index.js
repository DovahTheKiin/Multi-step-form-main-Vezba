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

const toggleBall = document.querySelector(".toggle-ball")
const monthlyToggle = document.querySelector(".monthly-toggle")
const yearlyToggle = document.querySelector(".yearly-toggle")
const freeMonths = document.querySelectorAll(".free-months")
const option = document.querySelectorAll(".option")
const monthPrice = document.querySelectorAll(".month-price")
const billingToggle = document.querySelector(".billing-toggle")
const selectPlan = document.querySelector(".select-plan")
const billingOptions = document.querySelector(".billing-options")

const addonOptions = document.querySelectorAll(".addon-options")
const addonOption = document.querySelectorAll(".addon-option")
const selectedAddon = document.querySelector(".select-addon")

const inputs = document.querySelectorAll(".inputs")
const required = document.querySelectorAll(".required")

const finalInfo = document.querySelectorAll(".final-info")
const finalInfoNames = document.querySelectorAll(".final-info > p")
const changeLink = document.querySelectorAll(".change-link")
const selectOptionName = document.querySelectorAll(".selected-option-name")
const planInfo = document.querySelector(".plan-info")
const planInfoParagraph = document.querySelectorAll(".plan-info-paragraph")
const planInfoLink = document.querySelector(".plan-info-link")
const addonInfo = document.querySelector(".addons-info")
// const addonInfoLink = document.querySelector(".addon-info-link")
// const addonInfoParagraph = document.querySelectorAll(".addon-info-paragraph")

const planHeader = document.querySelectorAll(".plan-header")
const planPrice = document.querySelectorAll(".plan-price")
const addonName = document.querySelectorAll(".addon-name")
const addonPrice = document.querySelectorAll(".addon-price-span")
const totalSpan = document.querySelector(".total-span")
const finalPlanName = document.querySelector(".final-plan-name")
const planSpan = document.querySelector(".plan-span")
const addonSpan = document.querySelectorAll(".addon-span")
const finalAddonNameParagraph = document.querySelectorAll(".final-addon-name")
const planYM = document.querySelector(".y-m-span")
const totalYM = document.querySelector(".total-y-m")
const selectedOptions = document.querySelector(".selected-options")
const form = document.querySelector(".myForm")
const thankYou = document.querySelector(".thank-you")
const footer = document.querySelector(".footer")
const body = document.body;

let counter = 0;
let finalArrayName = [];
let finalArrayNumber = [];
let finalAddonName = [];
let finalAddonNumber = [];
let toggleArray = [];
let totalYMArray = [];
let pricePerMYArray = [];
let arrayCounter = 0;
let addonArrayCounter = 0;
let backButtonCounter = 0;
let finishClick = 0;
nextStepBtn.addEventListener('click', () => {
    let optionCounter = 0;
    let addonCounter = 0;
    let empty = false;
    if(counter === 0) {
        for(let i=0;i<inputs.length;i++) {
            if(inputs[i].value === "") {
                inputs[i].style.border = "1px solid var(--red-400)";
                required[i].classList.add("active");
                empty = true;
            } else {
                inputs[i].style.border = "1px solid var(--gray-200)";
                required[i].classList.remove("active");
            }
        }
        if(inputs[0].value.match(/^[a-z ,.'-]+$/i)) {
            inputs[0].style.border = "1px solid var(--gray-200)";
            required[0].classList.remove("active");
        } else {
            inputs[0].style.border = "1px solid var(--red-400)";
            required[0].classList.add("active");
            empty = true;
        }
        if(inputs[1].value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            inputs[1].style.border = "1px solid var(--gray-200)";
            required[1].classList.remove("active");
        } else {
            inputs[1].style.border = "1px solid var(--red-400)";
            required[1].classList.add("active");
            empty = true;
        }
        if(inputs[2].value.trim().match(/^\d{10}$/)){
            inputs[2].style.border = "1px solid var(--gray-200)";
            required[2].classList.remove("active");
        } else {
            inputs[2].style.border = "1px solid var(--red-400)";
            required[2].classList.add("active");
            empty = true;
        }
        if(empty === true) {
            return;
        }
    }
    if(counter === 1) {
        arrayCounter = 0;
        finalArrayName = [];
        finalArrayNumber = [];
        for(let i=0;i<option.length;i++){
            if(option[i].classList.contains("selected-option")) {
                optionCounter = optionCounter + 1;
            }
        }
        console.log("Option counter: " + optionCounter);
        if(optionCounter < 1) {
            selectPlan.classList.add("active");
            counter = 1;
            return;
        }
        if(arrayCounter === 1) {
            arrayCounter = 0;
            finalArrayName = [];
            finalArrayNumber = [];
            for(let i=0;i<option.length;i++){
                if(option[i].classList.contains("selected-option")){
                    finalArrayName.push(planHeader[i].innerHTML);
                    finalArrayNumber.push(planPrice[i].innerHTML);
                    arrayCounter = 1;
                }
            }
        } else if(arrayCounter === 0) {
            for(let i=0;i<option.length;i++){
                if(option[i].classList.contains("selected-option")){
                    finalArrayName.push(planHeader[i].innerHTML);
                    finalArrayNumber.push(planPrice[i].innerHTML);
                    arrayCounter = 1;
                }
            }
        }
        if(clickToggle === 0) {
            toggleArray.push("Monthly");
            totalYMArray.push("month");
            pricePerMYArray.push("mo");
        } else {
            toggleArray.push("Yearly");
            totalYMArray.push("year");
            pricePerMYArray.push("yr");
        }
        console.log("Toggle Array: " + toggleArray);
    }
    if(counter === 2) {
        for(let i=0;i<addonOption.length;i++){
            if(addonOption[i].classList.contains("selected-addon")) {
                addonCounter = addonCounter + 1;
            }
        }
        console.log("Addon counter: " + addonCounter);
        if(addonCounter < 1) {
            selectedAddon.classList.add("active");
            counter = 2;
            return;
        }
        if(backButtonCounter > 0) {
            backButtonCounter = 0;
            finalAddonName = [];
            finalAddonNumber = [];
            for(let i=0;i<addonOptions.length;i++) {
                if(addonOptions[i].checked === true) {
                    console.log("lol" + i);
                }
                if(addonOptions[i].checked === true) {
                    finalAddonName.push(addonName[i].innerHTML);
                    finalAddonNumber.push(addonPrice[i].innerHTML);
                }
            }
        } else if(backButtonCounter === 0) {
            for(let i=0;i<addonOptions.length;i++) {
                if(addonOptions[i].checked === true) {
                    console.log("lol" + i);
                }
                if(addonOptions[i].checked === true) {
                    finalAddonName.push(addonName[i].innerHTML);
                    finalAddonNumber.push(addonPrice[i].innerHTML);
                }
            }
        }
        console.log("Name Array: " + finalArrayName);
        console.log("Number Array " + finalArrayNumber);
        console.log("Addon Name Array: " + finalAddonName);
        console.log("Addon Number Array: " + finalAddonNumber);
    }
    counter = counter + 1;
    if(counter === 3) {
        let appendFinalAddons = "";
        let totalAddonPrice = 0;
        finalPlanName.innerHTML = finalArrayName[0];
        planSpan.innerHTML = finalArrayNumber[0];
        planYM.innerHTML = toggleArray[0];
        totalYM.innerHTML = totalYMArray[0];
        for(let i=0;i<finalAddonName.length;i++) {
            totalAddonPrice = totalAddonPrice + Number(finalAddonNumber[i]);
            appendFinalAddons += `
            <div class="selected-ones">
                <div class="name-and-change">
                    <p class="selected-option-name addon-info-paragraph final-addon-name">${finalAddonName[i]}</p>
                    <a href="#" class="addon-info-link change-link">Change</a>
                </div>
                <p class="selected-price addon-info-paragraph">+$<span class="addon-span">${finalAddonNumber[i]}</span>/<span class="price-per-my">mo</span></p>
            </div>
            `;
        }
        addonInfo.innerHTML = appendFinalAddons;
        totalSpan.innerHTML = Number(finalArrayNumber[0]) + totalAddonPrice;
        planInfoLinkClick();
        addonInfoLinkClick();
        pricePerMYSpan();
    }
    if(counter > 3) {
        counter = 3;
    }
    // fieldset[counter].classList.add("active");
    // !fieldset[counter].classList.add("hidden");
    if(counter === 1) {
        arrayCounter = 0;
        finalArrayName = [];
        finalArrayNumber = [];
        pricePerMYArray = [];
        firstStep.classList.remove("show");
        secondStep.classList.add("show");
        goBackBtn.classList.add("show");
        formSteps[0].classList.remove("selected");
        formSteps[1].classList.add("selected");
        billingToggle.classList.remove("hidden");
        billingToggle.classList.add("active-flex");
    }
    if(counter === 2) {
        selectPlan.classList.remove("active");
        billingToggle.classList.remove("active-flex");
        billingToggle.classList.add("hidden");
        secondStep.classList.remove("show");
        thirdStep.classList.add("show");
        formSteps[1].classList.remove("selected");
        formSteps[2].classList.add("selected");
    }
    if(counter === 3) {
        selectedOptions.classList.remove("hidden");
        selectedOptions.classList.add("active");
        selectedAddon.classList.remove("active");
        thirdStep.classList.remove("show");
        fourthStep.classList.add("show");
        nextStepBtn.classList.add("hidden");
        confirmBtn.classList.add("active");
        formSteps[2].classList.remove("selected");
        formSteps[3].classList.add("selected");
    }
    console.log("Counter: " + counter);
})

function pricePerMYSpan() {
    const pricePerMY = document.querySelectorAll(".price-per-my")

    for(let i=0;i<pricePerMY.length;i++){
        pricePerMY[i].innerHTML = pricePerMYArray[0];
    }
}

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
        billingToggle.classList.remove("active-flex");
        billingToggle.classList.add("hidden");
        selectPlan.classList.remove("active");
    }
    if(counter === 1) {
        toggleArray = [];
        totalYMArray = [];
        pricePerMYArray = [];
        secondStep.classList.add("show");
        thirdStep.classList.remove("show");
        formSteps[2].classList.remove("selected");
        formSteps[1].classList.add("selected");
        billingToggle.classList.remove("hidden");
        billingToggle.classList.add("active-flex");
        selectedAddon.classList.remove("active");
    }
    if(counter === 2) {
        backButtonCounter = 1;
        selectedOptions.classList.add("hidden");
        addonInfo.classList.remove("finish-padding-start");
        addonInfo.classList.add("finish-padding-end");
        thirdStep.classList.add("show");
        fourthStep.classList.remove("show");
        nextStepBtn.classList.remove("hidden");
        confirmBtn.classList.remove("active");
        formSteps[3].classList.remove("selected");
        formSteps[2].classList.add("selected");
    }
})
let monthlyPricesToggle = [9, 12, 15, 1, 2, 2];
let clickToggle = 0;
toggleBall.addEventListener('click', () => {
    clickToggle = clickToggle + 1;
    toggleBall.classList.toggle("toggle-active");
    monthlyToggle.classList.toggle("toggle-text-color");
    yearlyToggle.classList.toggle("toggle-text-color");
    for(let i=0;i<freeMonths.length;i++) {
        freeMonths[i].classList.toggle("active");
        freeMonths[i].classList.toggle("free-months-hide")
        freeMonths[i].classList.toggle("free-months-show")
        option[i].classList.toggle("option-padding-end")
        option[i].classList.toggle("option-padding")
        if(clickToggle === 2) {
            for(let j=0;j<monthPrice.length;j++) {
                monthPrice[j].innerHTML = `${monthlyPricesToggle[j]}`;
            }
            clickToggle = 0;
        }
        if(clickToggle === 1) {
            for(let j=0;j<monthPrice.length;j++) {
                let monthlyPricesToggled = monthlyPricesToggle[j]*10;
                monthPrice[j].innerHTML = `${monthlyPricesToggled}`;
            }
        }
    }
})
const clickHandler = (ev) => {
    for(const plan of option) {
        if (plan === ev.target && !plan.classList.contains("selected-option")) {
            plan.classList.add("selected-option");
        } else {
            plan.classList.remove("selected-option");
        }
    }
}
billingOptions.addEventListener('click', clickHandler);

for(let i=0;i<addonOptions.length;i++) {
    addonOptions[i].addEventListener('click', () =>{
        addonOption[i].classList.toggle("selected-addon");
    })
}
// for(let i=0;i<inputs.length;i++) {
//     inputs.addEventListener('change', () => {
//         if(inputs[i].value === "") {
//             inputs[i].style.border = "1px solid var(--red-400)";
//             required[i].classList.add("active");
//         }
//     })
// }
planInfo.addEventListener('click', () => {
        planInfo.classList.toggle("finish-padding-end");
        planInfo.classList.toggle("finish-padding-start");
        planInfoLink.classList.toggle("active");
        planInfoLink.classList.toggle("change-link-show");
        for(let i=0;i<planInfoParagraph.length;i++) {
            planInfoParagraph[i].classList.toggle("finish-text-color");
        }
})
addonInfo.addEventListener('click', () => {
    finishClick = finishClick + 1;
    const addonInfoLink = document.querySelectorAll(".addon-info-link")
    const addonInfoParagraph = document.querySelectorAll(".addon-info-paragraph")

    let addoninfoLinkArray = addonInfoLink.length;
    console.log(addoninfoLinkArray);
    let infoLinkLenght = addoninfoLinkArray - 1;
    if(finishClick === 1) {
        addonInfo.classList.remove("finish-padding-end");
        addonInfo.classList.add("finish-padding-start");
        addonInfoLink[infoLinkLenght].classList.add("active");
        addonInfoLink[infoLinkLenght].classList.add("change-link-show");
        for(let i=0;i<addonInfoParagraph.length;i++) {
            addonInfoParagraph[i].classList.add("finish-text-color");
        }
    } else if(finishClick === 2) {
        addonInfo.classList.add("finish-padding-end");
        addonInfo.classList.remove("finish-padding-start");
        addonInfoLink[infoLinkLenght].classList.remove("active");
        addonInfoLink[infoLinkLenght].classList.remove("change-link-show");
        for(let i=0;i<addonInfoParagraph.length;i++) {
            addonInfoParagraph[i].classList.remove("finish-text-color");
        }
        finishClick = 0;
    }
})
function planInfoLinkClick() {
    planInfoLink.addEventListener('click', () => {
        selectedOptions.classList.add("hidden");
        addonInfo.classList.remove("finish-padding-start");
        addonInfo.classList.add("finish-padding-end");
        backButtonCounter = 1;
        counter = 1;
        toggleArray = [];
        totalYMArray = [];
        pricePerMYArray = [];
        arrayCounter = 0;
        finalArrayName = [];
        finalArrayNumber = [];
        fourthStep.classList.remove("show");
        secondStep.classList.add("show");
        confirmBtn.classList.remove("active");
        nextStepBtn.classList.remove("hidden");
    })
}
function addonInfoLinkClick() {
    const addonInfoLink = document.querySelectorAll(".addon-info-link")

    let addoninfoLinkArray = addonInfoLink.length;
    console.log(addoninfoLinkArray);
    let infoLinkLenght = addoninfoLinkArray - 1;

    addonInfoLink[infoLinkLenght].addEventListener('click', () => {
        selectedOptions.classList.add("hidden");
        addonInfo.classList.remove("finish-padding-start");
        addonInfo.classList.add("finish-padding-end");
        backButtonCounter = 1;
        counter = 2;
        toggleArray = [];
        pricePerMYArray = [];
        totalYMArray = [];
        fourthStep.classList.remove("show");
        thirdStep.classList.add("show");
        confirmBtn.classList.remove("active");
        nextStepBtn.classList.remove("hidden");
    })
}

confirmBtn.addEventListener('click', () => {
    form.classList.add("hidden");
    footer.classList.add("hidden");
    thankYou.classList.add("active-flex");
})
thankYou.addEventListener('click', () => {
    window.location.reload();
})