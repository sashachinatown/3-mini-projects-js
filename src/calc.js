let input = document.querySelector('input');
let form = document.querySelector('form');
let operationBtns = document.querySelectorAll('#operations > *');
let calculateBtn = document.querySelector('#calc');
let clearBtn = document.querySelector('#clear');
let progress = document.querySelector('#progress');

input.addEventListener('focus', () => {
    input.setAttribute('placeholder', '');
})
input.addEventListener('blur', () => {
    input.setAttribute('placeholder', 'Введіть дані для обчислення')
})

let value = 0;

input.addEventListener('change', (event) => {
    value = event.target.value;
})

input.addEventListener('input', inputNumbersOnly);


const operations = {
    '+': '+',
    '-': '-',
    'x': '*',
    ':': '/',
    '%': '%'
}
let operation;

let values = [];


operationBtns.forEach(btn => btn.addEventListener('click', (event) => {
    event.preventDefault();
    values.push(+value);
    value = '';
    input.value = value;
    input.placeholder = 'Введіть другий аргумент';
    operation = operations[event.target.textContent];
    progress.textContent = `${values[0]} ${event.target.textContent}`;
}));

calculateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(value) {
        values.push(+value);
        value = '';
        input.value = value;
        input.placeholder = 'Введіть дані для обчислення';
    }
    calculate(values, operation);
});

clearBtn.addEventListener('click', (event) => {
    event.preventDefault();
    clear();
});

function calculate(arr, operation) {
    let res;
    if (operation === '%') {
        res = eval(`${arr[0]} / 100 * ${arr[1]}`);
    } else {
        res = eval(`${arr[0]} ${operation} ${arr[1]}`);
        res === 0.30000000000000004 || res === -0.30000000000000004 ? res = res.toFixed(1) : 0;
    }
    res === Infinity || res === -Infinity ? progress.textContent = 'Error' : progress.textContent += ` ${arr[1]} = ${res}`;
    values = [];
    operation = undefined;
}

function clear() {
    values = [];
    operation = undefined;
    input.value = '';
    progress.textContent = '...';
}

function inputNumbersOnly(e){
    let allowed = '-1234567890.';
    this.value.indexOf('-') !== this.value.lastIndexOf('-') || this.value.indexOf('-') > 0 ? this.value = this.value.slice(0, -1) : 0;
    this.value.indexOf('.') !== this.value.lastIndexOf('.') ? this.value = this.value.slice(0, -1) : 0;
    if (allowed.indexOf(this.value[this.value.length - 1]) === -1) {
        this.value = this.value.slice(0, -1);
    }
}
