function isPositiveNumber(number) {
    return typeof (number) === "number" && !isNaN(number) && number !== Infinity && number > 0;
}

function isNonEmptyArray(array) {
    return Array.isArray(array) && array.length > 0;
}

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

function search(items, currentPage, pageSize, filterFn, sortFn) {
    if (!isValidInput(items, currentPage, pageSize, filterFn, sortFn)) {
        return [];
    }

    var filteredItems = items
        .filter(filterFn)
        .sort(sortFn);

    var pagesCount = Math.ceil(filteredItems.length / pageSize);
    if (currentPage > pagesCount) {
        return [];
    }

    var firstArticleId = (currentPage - 1) * pageSize;
    var lastArticleId = Math.min(firstArticleId + pageSize, items.length);
    return filteredItems.slice(firstArticleId, lastArticleId);
}