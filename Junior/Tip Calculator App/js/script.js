const inputBill = document.getElementById('calculator-bill');
const inputPeople = document.getElementById('calculator-people');

const inputBillParent = inputBill.parentElement;
const inputPeopleParent = inputPeople.parentElement;

const tipCustom = document.getElementById('calculator-tip-custom');

const tipsList = document.querySelectorAll('.calculator__tip-btn');
const resetButton = document.getElementById('reset-button');

// START
let bill = 0;
let people = 0;

initializeTipsList();
initializeTipCustom();
initializeInputBill();
initializeInputPeople();
initializeResetButton();

checkResetButtonActive(false);
clearTipsList();

// END HOIST

function initializeTipsList(){
    tipsList.forEach(function(tip, index) {
        tip.addEventListener('click', function() {
            clearTipsList();
            this.classList.add('calculator__tip-btn--active');

            tipCustom.value = '';
            checkResetButtonActive(true);
        });
    });
}

function initializeTipCustom(){
    tipCustom.addEventListener('input', () => {
        clearTipsList();
        checkResetButtonActive(true);
    });
}

function initializeInputBill(){
    inputBill.addEventListener('input', function () {
        checkResetButtonActive(true);

        testBill(this.value);
    });
}

function initializeInputPeople(){
    inputPeople.addEventListener('input', function() {
        checkResetButtonActive(true);

        testPeople(this.value);
    });
}

function initializeResetButton(){
    resetButton.addEventListener('click', () => {
        clearTipsList();
        tipCustom.value = '';
        inputBill.value = '';
        inputPeople.value = '';
        checkResetButtonActive(false);
    });
}

function clearTipsList(){
    tipsList.forEach(function(tip, index) {
        tip.classList.remove('calculator__tip-btn--active');
    });
}

function checkResetButtonActive(check){
    let tipCheck = false;

    tipsList.forEach(function(tip, index) {
        if (tip.className.includes('calculator__tip-btn--active')){
            tipCheck = true;
        }
    });

    if (check && (tipCheck || tipCustom.value !== '') && inputBill.value !== '' && inputPeople.value !== ''){
        resetButton.classList.remove('calculator__result-btn--disabled');
        resetButton.classList.add('calculator__result-btn--active');

        return true;
    } else {
        resetButton.classList.add('calculator__result-btn--disabled');
        resetButton.classList.remove('calculator__result-btn--active');

        return false;
    }
}

function testPeople(x){
    people = x < 0 ? 0 : x;

    inputPeople.value = people;

    if (people <= 0){
        inputPeopleParent.classList.add('calculator__input--error');
    } else {
        inputPeopleParent.classList.remove('calculator__input--error');
    }
}

function testBill(x){
    bill = x < 0 ? 0 : x;

    inputBill.value = bill;

    if (bill <= 0){
        inputBillParent.classList.add('calculator__input--error');
    } else {
        inputBillParent.classList.remove('calculator__input--error');
    }
}