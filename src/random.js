let amount = document.querySelector('#amount'),
    min = document.querySelector('#min'),
    max = document.querySelector('#max'),
    generateBtn = document.querySelector('#generate'),
    dataDisplayer = document.querySelector('#data'),
    checkUniq = document.querySelector('#uniq'),
    checkAsc = document.querySelector('#asc');

let regPosNumbers = /^[0]|[0-9]{3}?$/g;

amount.addEventListener('input', inputPosNumbers);



generateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    data.value = '';
    let resArr = [], currentRandom;
    if (checkUniq.checked) {
        if (+amount.value > max.value - min.value) {
            alert('Задана кількість значень більша за кількість чисел у діапазоні');
            return;
        } else {
            while (resArr.length < +amount.value) {
                currentRandom = Math.round(Math.random() * (+max.value - +min.value) + +min.value);
                if (resArr.indexOf(currentRandom) === -1) {
                    resArr.push(currentRandom);
                }
            }
        }
    } else {
        for(let i = 0; i < amount.value; i++) {
            currentRandom = Math.round(Math.random() * (+max.value - +min.value) + +min.value);
            resArr.push(currentRandom);
        }
    }
    

    checkAsc.checked ? resArr.sort((a, b) => a - b) : 0; 

    let result = resArr.join(', ');
    data.textContent = result ? result : "Дані з'являться тут";
})


function inputPosNumbers(e){
    this.value = this.value.replace(regPosNumbers, '');
}



