const switcher = document.getElementById('theme-switcher');
const calcField = document.getElementById('calculator-field') as HTMLInputElement;

const calcNum : HTMLElement[] = [];
for (let i = 0; i < 10;i++){
    let el = document.getElementById('calculator-number-' + i);
    calcNum.push(el);
}

const calcOpDiv = document.getElementById('calculator-operator-div');
const calcOpAdd = document.getElementById('calculator-operator-add');
const calcOpSub = document.getElementById('calculator-operator-sub');
const calcOpMult = document.getElementById('calculator-operator-mult');

const calcDelete = document.getElementById('calculator-delete');
const calcFrac = document.getElementById('calculator-frac');
const calcReset = document.getElementById('calculator-reset');
const calcCalculate = document.getElementById('calculator-calculate');

let theme : number = 1;
let field : string = '0';

switcher.addEventListener('click', nextTheme);
if (localStorage.getItem('theme')) {
    changeTheme(+localStorage.getItem('theme'));
}

for (let i = 0; i < 10;i++){
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

function updateField(){
    calcField.value = field.replace('*', 'x');
    calcField.scrollLeft = (calcField as any).scrollLeftMax;
}

function concatNumberToField(concat: string){
    if (field.search('Infinity') != -1){
        field = '';
    }

    if (field == '0') {
        field = '';
    }

    if (field[field.length - 1] == '0' && concat == '.') {
        
    }

    field += concat;
    updateField();
}

function setFieldString(str: string){
    if (field.search('Infinity') != -1){
        field = '';
    } else {
        field = str.toString();
    }

    if (field == ''){
        field = '0';
    }

    updateField();
}

function initializeNumber(element: HTMLElement, num: string){
    element.addEventListener('click', () => {
        concatNumberToField(num);
    });
}

function initializeOperator(element: HTMLElement, operator: string){
    element.addEventListener('click', () => {
        if (field != '0' && field != '' && field != 'Infinity'){
            if (field[field.length-1] == ' ') {
                field = field.substr(0, field.length - 3);
            }
            concatNumberToField(' ' + operator + ' ');
        }
    });
}

function initializeFrac(element: HTMLElement){
    element.addEventListener('click', () => {
        let check: boolean = true;
        let exist: boolean = false;

        let fcheck = field + '.';

        for (let i = 0; i < fcheck.length; i++){
            if (fcheck[i] == '.'){
                if (exist){
                    check = false;
                    return;
                }
                exist = true;
            } else if (fcheck[i] == ' '){
                exist = false;
            }
        }
        if (field == '' || field == '0'){
            concatNumberToField('0.');
        } else if (check === true){
            let sp = field.split(' ');
            if (sp[sp.length - 1].search('.') == -1){
                concatNumberToField('0.');
            } else {
                concatNumberToField('.');
            }
        }
    });
}

function initializeReset(element: HTMLElement){
    element.addEventListener('click', () => {
        setFieldString('0');
    });
}

function initializeCalculate(element: HTMLElement){
    element.addEventListener('click', () => {
        const x = eval(field);
        setFieldString(x);
    });
}

function initializeDelete(element: HTMLElement){
    element.addEventListener('click', () => {
        if (field != '0'){
            let rem = 1;

            if (field[field.length - 1] == ' '){
                rem = 3;
            }

            const x = field.substr(0, field.length - rem);
            setFieldString(x);
        }
    });
}

function nextTheme(){
    const limit = 3;

    theme++;

    if (theme > limit){
        theme %= 3;
    }

    changeTheme(theme);
}

function changeTheme(nTheme: number){
    const newTheme = "theme" + nTheme;
    document.documentElement.className = newTheme;

    localStorage.setItem('theme', nTheme.toString())

    theme = nTheme;
}