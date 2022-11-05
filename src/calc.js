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
    if (!operation && value) {
        values.push(+value);
        value = '';
        input.value = value;
        input.placeholder = 'Введіть другий аргумент';
        operation = operations[event.target.textContent];
        progress.textContent = `${values[0]} ${event.target.textContent}`;
    }
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
    }
    progress.textContent += ` ${arr[1]} = ${res}`;
    values = [];
    operation = undefined;
}

function clear() {
    values = [];
    operation = undefined;
    input.value = '';
    progress.textContent = '...';
}
