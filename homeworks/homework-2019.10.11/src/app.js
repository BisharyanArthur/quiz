function isBoolean(value) {
    return typeof (value) === 'boolean';
}

function yesOrNo(value) {
    if (!isBoolean(value)) {
        return null;
    }

    return value ? "Yes" : "No";
}

// typeof это оператор, а не функция, просто typeof number === 'number'
// кавычки используются одинарные, у тебя двойные, не стоит привыкать так
function isNonNegativeNumber(number) {
    return typeof (number) === "number" && !isNaN(number) && number !== Infinity && number >= 0;
}

function counter(total) {
    if (!isNonNegativeNumber(total)) {
        return null;
    }

    if (total > 9) {
        return "9+";
    }

    return String(total);
}

// https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date/44198641#44198641
function isValidDate(date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

function isPositiveNumber(number) {
    return typeof (number) === "number" && !isNaN(number) && number !== Infinity && number > 0;
}

// константы скорее именнуются SECONDS_IN_YEAR, чтоб прям кричали,
// ещё у тебя этот пример без бабеля, так что нельзя использовать const
// это не работает везде
const MilliSecondsInSeconds = 1000;
const SecondsInYear = 3600 * 24 * 365;

function calculateAge(date) {
    if (!isValidDate(date)) {
        return null;
    }

    var timeDifferenceSeconds = (Date.now() - date) / MilliSecondsInSeconds;
    var ageDifference = Math.floor(timeDifferenceSeconds / SecondsInYear);

    if (!isPositiveNumber(ageDifference)) {
        return null;
    }

    return ageDifference;
}

function getRandomIntFromRange(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

function isNonEmptyArray(array) {
    return Array.isArray(array) && array.length > 0;
}

function getRandomItem(list) {
    if (!isNonEmptyArray(list)) {
        return null;
    }

    var itemId = getRandomIntFromRange(0, list.length - 1);
    return list[itemId];
}
