let amount = document.querySelector('#amount'),
    min = document.querySelector('#min'),
    max = document.querySelector('#max'),
    generateBtn = document.querySelector('#generate'),
    dataDisplayer = document.querySelector('#data');

let regPosNumbers = /^[0]|[0-9]{3}?$/g;
// let regNumbers = /^[0]{2}/g;

amount.addEventListener('input', inputPosNumbers);
// inputFrom.addEventListener('input', inputNumbersOnly);
// inputTo.addEventListener('input', inputNumbersOnly);



generateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    data.value = '';
    let resArr = [],
        currentRandom;

    for(let i = 0; i < amount.value; i++) {
        currentRandom = Math.round(Math.random() * (+max.value - +min.value) + +min.value);
        resArr.push(currentRandom);
    }
    let result = resArr.join(', ');
    data.value = result;
})


function inputPosNumbers(e){
    this.value = this.value.replace(regPosNumbers, '');
}

// function inputNumbersOnly(e){
//     this.value = this.value.replace(regNumbers, '');
// }


