let questions = [
     {
        "question" : "Який дизайн автомобільного кузова існує?",
        "content" : [
            "Тюльпан",
            "Гарпун",
            "Аркан",
            "Седан"
        ],
        "correct" : 3
    },
    {
        "question" : "Як у народі називають збирання грибів?",
        "content" : [
            "Тихе полювання",
            "Ручна риболовля",
            "Сумна сауна",
            "Весела гульня"
        ],
        "correct" : 0
    },
    {
        "question" : "У 1936 році був розроблений новий дієтичний сорт ковбаси, призначений для тих, хто пережив голодування. Як називалась ця ковбаса?",
        "content" : [
            "Особлива",
            "Революційна",
            "Лікарська",
            "Дієтична"
        ],
        "correct" : 2
    },
    {
        "question" : "Яке з цих міст знаходиться одразу в двох частинах світу?",
        "content" : [
            "Куала-Лумпур",
            "Шарм-Ель-Шейх",
            "Пекін",
            "Стамбул"
        ],
        "correct" : 3
    },
    {
        "question" : "Глибина якої станції київського метро теоретично дозволяє вмістити Батьківщину-Мати у повний зріст разом з постаментом?",
        "content" : [
            "Золоті Ворота",
            "Лук'янівська",
            "Шулявська",
            "Арсенальна"
        ],
        "correct" : 3
    },
    {
        "question" : 'В Україні скрутити "дулю" означає грубо відмовити. А що цей жест означає у Бразилії?',
        "content" : [
            "Бажання образити",
            "Непристойну пропозицію",
            "Бажання удачі",
            "Напрямок руху"
        ],
        "correct" : 2
    },
    {
        "question" : "Що роблять з шайбою перед початком хокейного матчу?",
        "content" : [
            "Натирають мастилом",
            "Заморожують",
            "Сушать",
            "Зважують"
        ],
        "correct" : 1
    },
    {
        "question" : "Японське рибацьке містечко Сусамі з населенням 5000 чоловік приваблює туристів незвичною поштовою скринею. Де вона знаходиться?",
        "content" : [
            "У повітрі",
            "На дереві",
            "В пляшці",
            "Під водою"
        ],
        "correct" : 3
    },
    {
        "question" : "Що дозволяло законодавство США у 1913 році?",
        "content" : [
            "Брати участь у виборах жінкам",
            "Відправляти дітей поштою",
            "Балотуватися тваринам у Конгрес",
            "Не сплачувати податки"
        ],
        "correct" : 1
    },
    {
        "question" : "Ув'язнені норвезької в'язниці-острова Бастой мають один з найнижчих рівнів рецидивів у світі. В чому особливість цієї в'язниці?",
        "content" : [
            "В'язнів приковують на ніч",
            "Кожен в'язень має свого охоронця",
            "Зовсім немає охорони",
            "В'язні мають активний відпочинок"
        ],
        "correct" : 3
    },
    {
        "question" : "В чому особливість державного прапора Парагваю?",
        "content" : [
            "Він трикутний",
            "Він п'ятикутний",
            "Він має дві різні сторони",
            "Він зараз тимчасово відсутній"
        ],
        "correct" : 2
    },
    {
        "question" : "З яким обладнанням жителі Африки рибачать на протоптера?",
        "content" : [
            "З сокирою",
            "З палкою",
            "З лопатою",
            "З щипцями"
        ],
        "correct" : 2
    },
    {
        "question" : "Чому на тілі Кріштіану Роналду немає татуювань?",
        "content" : [
            "Із релігійних переконань",
            "Це може завадити йому бути донором",
            "Через спортивні забобони",
            "Це заборонено контрактом"
        ],
        "correct" : 1
    },
    {
        "question" : "Коли і де була введена важка атлетика на Олімпійських іграх?",
        "content" : [
            "1986 в Афінах",
            "1988 в Сеулі",
            "1924 у Сент-Луїсі",
            "1908 в Лондоні"
        ],
        "correct" : 0
    },
    {
        "question": "Хто першим отримав Нобелівську премію з літератури?",
        "content" : [
            "романіст",
            "поет",
            "драматург",
            "есеїст"
        ],
        "correct": 1
    }
];

let level = 0;
let questionText = document.querySelector('h2');
questionText.textContent = questions[level].question;

let answerBtns = document.querySelectorAll('button');
answerBtns.forEach((answer, index) => answer.textContent = questions[level].content[index]);

let lossWrapper = document.createElement('div');
let lossMessage = document.createElement('h1');
let lossButton = document.createElement('button');

let reward = [...document.querySelectorAll('li')].reverse();

let fiftyBtn = document.querySelector('#fifty');
let viewersBtn = document.querySelector('#viewers');
let callFriendBtn = document.querySelector('#friend');

let viewersVotes = document.querySelectorAll('#viewersVotes');

let fiftyCounter = 0,
    viewersHelpCounter = 0,
    friendCallsCounter = 0;


answerBtns.forEach((answer, index) => {
    answer.addEventListener('click', (event) => checkAnswer(event, index));
});

fiftyBtn.addEventListener('click', () => setTimeout(fiftyFifty, 500));
viewersBtn.addEventListener('click', () => setTimeout(viewersHelp, 500));
callFriendBtn.addEventListener('click', () => setTimeout(callFriend, 500));

function checkAnswer(event, index) {
    answerBtns[index].classList.add('bg-red-500');
    answerBtns[questions[level].correct].classList.add('bg-emerald-500');

    answerBtns.forEach((answer) => {
        answer.classList.remove('hover:bg-white', 'bg-amber-400', 'hover:text-violet-900');
        answer.disabled = true; 
    });

    if ([...answerBtns].indexOf(event.target) !== questions[level].correct) {
        reward[level].classList.remove('active');
        level = 0;
        reward[level].classList.add('active');
        setTimeout(showLossMessage, 2000);
        return;
    }
        if (level < 15) {
            setTimeout(nextQuestion, 2000);
        } else {
        setTimeout(showVictoryMessage, 2000);
    }
}

function nextQuestion() {
    level++;
    questionText.textContent = questions[level].question;
    answerBtns.forEach((answer, index) => {
        answer.textContent = questions[level].content[index];
        answer.disabled = false; 
    });
    reward[level-1].classList.remove('active');
    reward[level].classList.add('active');
    clearStyles();
    answer.disabled = true; 
}

function clearStyles() {
    answerBtns.forEach((answer) => {
        answer.classList.remove('bg-red-500', 'bg-amber-400', 'bg-emerald-500');
        answer.classList.add('hover:bg-white', 'hover:text-violet-900');
    });
    viewersVotes.forEach(span => !span.classList.contains('hide') ? span.classList.toggle('hide') : 0);
}


function showLossMessage() {
    let musicTheme = document.querySelector('audio');
    musicTheme.remove();
    let musicLoss = document.createElement('audio');
    musicLoss.setAttribute('autoplay', 'autoplay');
    musicLoss.innerHTML = `<source src="./assets/loss.mp3" type="audio/mp3">`;
    document.body.append(musicLoss);
    clearStyles();

    questionText.classList.toggle('hide');
    answerBtns.forEach(button => button.classList.toggle('hide'));

    
    lossMessage.classList.add('text-2xl');
    lossButton.classList.add('py-3', 'px-6', 'mt-6', 'w-fit', 'font-medium', 'text-xl', 'border-2', 'rounded-xl', 'hover:text-violet-900', 'hover:bg-white');
    lossWrapper.classList.add('flex', 'flex-wrap', 'flex-col', 'items-center', 'justify-center', 'mt-5', 'mb-20');

    lossMessage.textContent = 'Ви програли!';
    lossButton.textContent = 'Почати заново';

    lossButton.addEventListener('click', restart)

    lossWrapper.append(lossMessage, lossButton);
    document.body.append(lossWrapper);
}

function restart() {
    lossWrapper.remove();
    questionText.classList.toggle('hide');
    questionText.textContent = questions[level].question;
    answerBtns.forEach(button => button.classList.toggle('hide'));
    answerBtns.forEach((answer, index) => {
        answer.textContent = questions[level].content[index];
    });

    fiftyCounter = 0;
    viewersHelpCounter = 0;
    friendCallsCounter = 0;

    makeActive(fiftyBtn);
    makeActive(viewersBtn);
    makeActive(callFriendBtn);

    let musicLoss = document.querySelector('audio');
    musicLoss.remove();

    let musicTheme = document.createElement('audio');
    musicTheme.setAttribute('autoplay', 'autoplay');
    musicTheme.setAttribute('loop', 'loop');
    musicTheme.innerHTML = `<source src="./assets/background.mp3" type="audio/mp3">`;
    document.body.append(musicTheme);
}

function fiftyFifty() {
    if(fiftyCounter < 1) {
        let wrongAnswers = [];
        answerBtns[questions[level].correct].classList.add('bg-amber-400');
        [...answerBtns].forEach(answer => !answer.classList.contains('bg-amber-400') ? wrongAnswers.push(answer) : 0);
        wrongAnswers[Math.round(Math.random() * (2 - 0) + 0)].classList.add('bg-amber-400');
        fiftyCounter++;
        makeInactive(fiftyBtn);
    }
}

function viewersHelp() {
    if(viewersHelpCounter < 1) {
        let randomPercent;
        for (let i = 0; i < viewersVotes.length; i++) {
            if (i === questions[level].correct) {
                randomPercent = Math.round(Math.random() * (34 - 14) + 14);
            } else {
                randomPercent = Math.round(Math.random() * (22 - 12) + 12);
            }
            viewersVotes[i].textContent = `${randomPercent}%`;
            viewersVotes[i].classList.toggle('hide');
        }
        viewersHelpCounter++;
        makeInactive(viewersBtn);
    }
    
}

function callFriend() {
    if(friendCallsCounter < 1) {
        answerBtns[Math.round(Math.random() * (3 - 0) + 0)].classList.add('bg-amber-400');
        friendCallsCounter++;
        makeInactive(callFriendBtn);
    }
}

function makeInactive(elem) {
    elem.classList.remove('hover:bg-amber-400', 'hover:text-violet-900', 'cursor-pointer');
    elem.classList.add('text-slate-400');
}

function makeActive(elem) {
    elem.classList.add('hover:bg-amber-400', 'hover:text-violet-900', 'cursor-pointer');
    elem.classList.remove('text-slate-400');
}


function showVictoryMessage() {
    document.body.classList.add('h-[100vh]');
    document.body.innerHTML = `
        <img src="../assets/money.gif" alt="victory" style="position: absolute; width: 100%; height: 100vh; margin: 0 auto;">
        <header class="mx-10 text-center flex flex-col justify-start items-center">
            <h1 class="mt-72 font-semibold text-4xl">Вітаємо! Ви виграли свій перший мільйон!!!</h1>
        </header>
        <audio id="musicTheme" autoplay loop>
            <source src="./assets/victory.mp3" type="audio/mp3">
        </audio>
    `;

}


    
