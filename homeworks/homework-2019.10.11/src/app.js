// в js используют '', "" крайне редко, ещё есть `` если внутри будет переменная для интерполяции
// typeof это оператор, а не функция, поэтому typeof value
function isBoolean(value) {
    return typeof (value) === "boolean";
}

function yesOrNo(value) {
    if (!isBoolean(value)) {
        return null;
    }

    return value ? "Yes" : "No";
}

// идея правильная, но Nan, Infinity тоже пройдут, а не должны, но это не точно, чекну в тестах
// я бы использовал Number.isInteger, но оно тоже не самый лучший кейс
// ещё я наврал про 0, он тоже должен отобращаться как 0, а сейчас будет null
function isPositiveNumber(number) {
    return typeof (number) === "number" && number > 0;
}

function counter(total) {
    if (!isPositiveNumber(total)) {
        return null;
    }

    if (total > 9) {
        return "9+";
    }

    return String(total);
}

// идеально, в таких случаях лучше с ссылкой :)
// https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
// потому что бывает случай что появляется такой коммент
//
// doesn't work
// https://stackoverflow.com/questions/bla-bla
// it works
// https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
function isValidDate(date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

// функции в js, которые пишутся с большой буквы это конструкторы, почему здесь с заглавной буквы?

// неверно, если я запущу твой код через два года, то мне по прежнему будет текущий возраст.
// конкретный now делают для тестов, чтобы там тесты проходили всегда
// когда вызовется одна из функций, то вместо неё надо вызвать другую, это решается через mock или spy фичи (гугли)
function GetNow() {
    return new Date("10/19/2019");
}

function calculateAge(date) {
    if (!isValidDate(date)) {
        return null;
    }

    // плохо, что за магия с 3600 * 24 * 365, надо выносить в константы
    // как насчёт скопипастить и разобраться в чем разница
    // https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
    var timeDifferenceSeconds = (GetNow() - date) / 1000;
    var yearDifference = Math.floor(timeDifferenceSeconds / (3600 * 24 * 365));
    // таким проверкам по хорошему дают собственное имя в переменной
    if (yearDifference <= 0) {
        return null;
    }

    return yearDifference;
}

// ужасно, нельзя переопределять входные параметры у функций, фу таким быть
// заскриншотил чтобы пугать тебя, когда синьором будешь
function getRandomIntFromRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(min + Math.random() * (max - min + 1));
}

function isNonEmptyArray(array) {
    return Array.isArray(array) && array.length > 0;
}

// красиво, у меня в проде return list[Math.floor(Math.random() * list.length)] || null
// твой читабельнее
function getRandomItem(list) {
    if (!isNonEmptyArray(list)) {
        return null;
    }

    var itemId = getRandomIntFromRange(0, list.length - 1);
    return list[itemId];
}
