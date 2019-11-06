function getRandomIntFromRange(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

function deepClone(object) {
    return JSON.parse(JSON.stringify(object));
}

function shuffleArray(array) {
    let shuffledArray = deepClone(array);
    for (let currentId = array.length - 1; currentId > 0; currentId--) {
        let otherId = getRandomIntFromRange(0, currentId);
        [shuffledArray[currentId], shuffledArray[otherId]] = [shuffledArray[otherId], shuffledArray[currentId]];
    }

    return shuffledArray;
}

function hasNextQuestion(questions) {
    return questions.length > 0;
}

function getNextQuestion(questions) {
    return questions.pop();
}

function askQuestion(question) {  
    let answer = prompt(question.text);
    return answer;
}

function isAnswerCorrect(question, answer) {
    return question.answer.toUpperCase() === answer.toUpperCase(); 
}

function isTimerEnabled() {
    return true;
}

function runQuiz(questions) {
    let shuffledQuestions = shuffleArray(questions);
    let answeredCorrect = 0;

    while (hasNextQuestion(shuffledQuestions) && isTimerEnabled()) {
        let question = getNextQuestion(shuffledQuestions);
        let answer = askQuestion(question);
        if (isAnswerCorrect(question, answer)) {
            answeredCorrect++;
        }
    }

    console.info('Correct: ' + answeredCorrect + ' out of ' + questions.length);
}

runQuiz(db);

let db = [{"text":"aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis","answer":"adapter"},
{"text":"viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus","answer":"multimedia"},
{"text":"vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis","answer":"time-frame"},
{"text":"dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam","answer":"solution"},
{"text":"quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas","answer":"framework"},
{"text":"amet cursus id turpis integer aliquet massa id lobortis convallis","answer":"complexity"},
{"text":"hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent","answer":"Operative"},
{"text":"mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis","answer":"global"},
{"text":"risus auctor sed tristique in tempus sit amet sem fusce consequat nulla","answer":"focus group"},
{"text":"in faucibus orci luctus et ultrices posuere cubilia curae mauris","answer":"context-sensitive"}];