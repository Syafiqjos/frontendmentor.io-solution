var switcher = document.getElementById('theme-switcher');
var calcField = document.getElementById('calculator-field');
var calcNum = [];
for (var i = 0; i < 10; i++) {
    var el = document.getElementById('calculator-number-' + i);
    calcNum.push(el);
}
var calcOpDiv = document.getElementById('calculator-operator-div');
var calcOpAdd = document.getElementById('calculator-operator-add');
var calcOpSub = document.getElementById('calculator-operator-sub');
var calcOpMult = document.getElementById('calculator-operator-mult');
var calcDelete = document.getElementById('calculator-delete');
var calcFrac = document.getElementById('calculator-frac');
var calcReset = document.getElementById('calculator-reset');
var calcCalculate = document.getElementById('calculator-calculate');
var theme = 1;
var field = '0';
switcher.addEventListener('click', nextTheme);
for (var i = 0; i < 10; i++) {
    initializeNumber(calcNum[i], i.toString());
}
initializeFrac(calcFrac);
initializeOperator(calcOpAdd, '+');
initializeOperator(calcOpSub, '-');
initializeOperator(calcOpDiv, '/');
initializeOperator(calcOpMult, '*');
initializeDelete(calcDelete);
initializeReset(calcReset);
initializeCalculate(calcCalculate);
setFieldString('0');
function updateField() {
    calcField.value = field.replace('*', 'x');
    calcField.scrollLeft = calcField.scrollLeftMax;
}
function concatNumberToField(concat) {
    if (field == '0') {
        field = '';
    }
    if (field[field.length - 1] == '0' && concat == '.') {
    }
    field += concat;
    updateField();
}
function setFieldString(str) {
    field = str.toString();
    if (field == '') {
        field = '0';
    }
    updateField();
}
function initializeNumber(element, num) {
    element.addEventListener('click', function () {
        concatNumberToField(num);
    });
}
function initializeOperator(element, operator) {
    element.addEventListener('click', function () {
        if (field[field.length - 1] == ' ') {
            field = field.substr(0, field.length - 3);
        }
        concatNumberToField(' ' + operator + ' ');
    });
}
function initializeFrac(element) {
    element.addEventListener('click', function () {
        var check = true;
        var exist = false;
        var fcheck = field + '.';
        for (var i = 0; i < fcheck.length; i++) {
            if (fcheck[i] == '.') {
                if (exist) {
                    check = false;
                    return;
                }
                exist = true;
            }
            else if (fcheck[i] == ' ') {
                exist = false;
            }
        }
        if (field == '' || field == '0') {
            concatNumberToField('0.');
        }
        else if (check === true) {
            var sp = field.split(' ');
            if (sp[sp.length - 1].search('.') == -1) {
                concatNumberToField('0.');
            }
            else {
                concatNumberToField('.');
            }
        }
    });
}
function initializeReset(element) {
    element.addEventListener('click', function () {
        setFieldString('0');
    });
}
function initializeCalculate(element) {
    element.addEventListener('click', function () {
        var x = eval(field);
        setFieldString(x);
    });
}
function initializeDelete(element) {
    element.addEventListener('click', function () {
        if (field != '0') {
            var rem = 1;
            if (field[field.length - 1] == ' ') {
                rem = 3;
            }
            var x = field.substr(0, field.length - rem);
            setFieldString(x);
        }
    });
}
function nextTheme() {
    var limit = 3;
    theme++;
    if (theme > limit) {
        theme %= 3;
    }
    changeTheme(theme);
}
function changeTheme(theme) {
    document.documentElement.className = "theme" + theme;
}
