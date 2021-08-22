function Calculator() {
    this.bill = 0;
    this.people = 0;

    function changeBill(x){
        this.bill = x;

        if (x < 0){
            return 'success';
        }

        return 'failed';
    }

    function changePeople(x){
        this.bill = x;

        if (x < 0){
            return 'negative';
        } else if (x == 0){
            return 'zero';
        }

        return 'success';
    }

    return this;
}

const calc = new Calculator();

const inputBill = document.getElementById('calculator-bill');
const inputPeople = document.getElementById('calculator-people');
const tipCustom = document.getElementById('calculator-tip-custom');

const tipsList = document.querySelectorAll('.calculator__tip-btn');
const resetButton = document.getElementById('reset-button');

// START

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
    inputBill.addEventListener('input', () => {
        checkResetButtonActive(true);
    });
}

function initializeInputPeople(){
    inputPeople.addEventListener('input', () => {
        checkResetButtonActive(true);
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