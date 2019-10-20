function isBoolean(value) {
    return typeof(value) === "boolean";
}

function yesOrNo(value) {
    if (!isBoolean(value)) {
        return null;
    }

    return value ? "Yes" : "No";
}

function isPositiveNumber(number) {
    return typeof(number) === "number" && number > 0;
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

function isValidDate(date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

function GetNow() {
    return new Date("10/19/2019");
}

function calculateAge(date) {
    if (!isValidDate(date)) {
        return null;
    }

    var timeDifferenceSeconds = (GetNow() - date) / 1000;
    var yearDifference = Math.floor(timeDifferenceSeconds / (3600 * 24 * 365));
    if (yearDifference <= 0) {
        return null;
    }

    return yearDifference;
}

function getRandomIntFromRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
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
