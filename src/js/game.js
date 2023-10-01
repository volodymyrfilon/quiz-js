const question = document.getElementById('question'),
      choices = document.getElementsByClassName('choice-text'),
      CORRECT_BONUS = 10,
      MAX_QUESTIONS = 12,
      scoreText = document.getElementById('score'),
      progressText = document.getElementById('progressText'),
      progressBarFull = document.getElementById('progressBarFull'),
      loader = document.getElementById('loader'),
      game = document.getElementById('game');

let currentQuestion = {},
    acceptingAnswers = true,
    score = 0,
    questionCounter = 0,
    availableQuestion = [],
    questions = [];


function replaceHTMLEntities(text) {
    const entitiesToReplace = {
        '&quot;': '"',
        '&#039;': "'",
        '&amp;': '&',
        '&rdquo;': '"',
        '&ldquo;': '"',
        '&ouml;': 'ö',
        '&auml;': 'ä',
        '&aring;': 'a',
        '&lrm;': '',
        '&rlm;': ''

    },
    regexPattern = new RegExp(Object.keys(entitiesToReplace).join('|'), 'g');

    return text.replace(regexPattern, match => entitiesToReplace[match]);
}

//!!!!! NEEEEEEEEEWWWWWWW
function showCorrectAnswer() {
    const correctChoiceNumber = currentQuestion.answer;
    const correctChoiceElement = document.querySelector(`[data-number="${correctChoiceNumber}"]`);
    correctChoiceElement.parentElement.classList.add('correct');

    setTimeout( () => {
        correctChoiceElement.parentElement.classList.remove('correct');
    }, 1250);
}
//!  ------------------------------


fetch('https://opentdb.com/api.php?amount=15&category=9&type=multiple')
    .then(res => res.json())
    .then(loadedQuestions => {
        questions = loadedQuestions.results.map(loadedQuestion => {
            const formattedQuestion = {
                question: replaceHTMLEntities(loadedQuestion.question),
            };

            //! new
            const answerChoices = loadedQuestion.incorrect_answers.map(answer => replaceHTMLEntities(answer));
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;

            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                replaceHTMLEntities(loadedQuestion.correct_answer)
            );

            //! old
            // const answerChoices = [...loadedQuestion.incorrect_answers];
            // formattedQuestion.answer = Math.floor(Math.random()*3) + 1;

            // answerChoices.splice(
            //     formattedQuestion.answer -1,
            //     0, 
            //     replaceHTMLEntities(loadedQuestion.correct_answer)
            // );

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index+1)] = choice;
            });

            return formattedQuestion
        });
        game.classList.remove('hidden');
        loader.classList.add('hidden');

        startGame();
    })
    .catch(err => {
    });

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestion.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //? go to end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //? upd the progressBar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;


    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    Array.from(choices).forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestion.splice(questionIndex, 1);
    acceptingAnswers = true;
};

Array.from(choices).forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target,
              selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }
        //! NEEWWWWWWW --------------------
        else {
            showCorrectAnswer();
        }
        //!  ------------------------------

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1250);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};


