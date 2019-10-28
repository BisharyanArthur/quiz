function isPositiveNumber(number) {
    return Number.isInteger(number) && number > 0;
}

function isNonEmptyArray(array) {
    return Array.isArray(array) && array.length > 0;
}

function isValidInput(items, currentPage, pageSize, filterFn, sortFn) {
    return isNonEmptyArray(items)
        && isPositiveNumber(currentPage)
        && isPositiveNumber(pageSize)
        && filterFn
        && sortFn;
}

function search(items, currentPage, pageSize, filterFn, sortFn) {
    if (!isValidInput(items, currentPage, pageSize, filterFn, sortFn)) {
        return [];
    }

    var filteredItems = items
        .filter(filterFn)
        .sort(sortFn);

    var pagesCount = Math.ceil(filteredItems.length / pageSize);

    var firstArticleOnPage = (currentPage - 1) * pageSize;
    var lastArticleOnPage = firstArticleOnPage + pageSize;
    return filteredItems.slice(firstArticleOnPage, lastArticleOnPage);
}
