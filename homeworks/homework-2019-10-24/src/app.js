// Number.isInteger && number > 0, я понимаю желание NaN и Infinity покрыть, но это уже перебор, но точно не является ошибкой
function isPositiveNumber(number) {
    return typeof (number) === "number" && !isNaN(number) && number !== Infinity && number > 0;
}

function isNonEmptyArray(array) {
    return Array.isArray(array) && array.length > 0;
}

// жестко, как уже написал можно предикаты всякие через !predicateFn чекнуть, пусть тот кто код вызывает заботится
function isFunction(func) {
    return func && {}.toString.call(func) === '[object Function]';
}

function isValidInput(items, currentPage, pageSize, filterFn, sortFn) {
    return isNonEmptyArray(items)
        && isPositiveNumber(currentPage)
        && isPositiveNumber(pageSize)
        && isFunction(filterFn)
        && isFunction(sortFn);
}

// всё четко, хз че столько тянул с домашкой
function search(items, currentPage, pageSize, filterFn, sortFn) {
    if (!isValidInput(items, currentPage, pageSize, filterFn, sortFn)) {
        // ещё как вариант можно console.warn сделать здесь, тогда в тестах надо verbose поправить будет, но это не важно сча
        return [];
    }

    var filteredItems = items
        .filter(filterFn)
        .sort(sortFn);

    // почему ceil? можно же Math.floor округление вниз или я чет не понял?
    var pagesCount = Math.ceil(filteredItems.length / pageSize);
    // да брось, у тебя slice в таких случаях тоже пустой массив вернёт
    if (currentPage > pagesCount) {
        return [];
    }

    // это же не айдишники, названия обманывают
    // ещё я бы их вынес отдельно от функции search, а то функция делает явно больше чем должна
    var firstArticleId = (currentPage - 1) * pageSize;
    var lastArticleId = Math.min(firstArticleId + pageSize, items.length);
    return filteredItems.slice(firstArticleId, lastArticleId);
}
