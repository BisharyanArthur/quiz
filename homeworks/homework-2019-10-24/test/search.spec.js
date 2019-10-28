describe('search', function () {
    var items;
    var filterFn;
    var sortFn;
    
    beforeEach(function () {
        items = [{ "id": 1, "name": "Rand", "content": "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie", "tag": "tag1", "createdAt": "1/27/2019", "imageUrl": "http://dummyimage.com/227x177.png/dddddd/000000" },
        { "id": 2, "name": "Elisa", "content": "eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a", "tag": "tag1", "createdAt": "7/31/2019", "imageUrl": "http://dummyimage.com/150x106.bmp/5fa2dd/ffffff" },
        { "id": 3, "name": "Mallory", "content": "orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis", "tag": "tag1", "createdAt": "2/25/2019", "imageUrl": "http://dummyimage.com/158x227.bmp/cc0000/ffffff" },
        { "id": 4, "name": "Drusy", "content": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis", "tag": "tag1", "createdAt": "6/8/2019", "imageUrl": "http://dummyimage.com/173x132.png/cc0000/ffffff" },
        { "id": 5, "name": "Marrilee", "content": "aliquet massa id lobortis onvallis tortor risus dapibus augue vel accumsan tellus nisi eu", "tag": "tag1", "createdAt": "8/10/2019", "imageUrl": "http://dummyimage.com/142x116.png/ff4444/ffffff" }];

        filterFn = (item) => item.tag === "tag1";
        sortFn = (item1, item2) => item1.createdAt - item2.createdAt;
    });

    it('should return all items with tag: "tag1"', function () {
        items = [{ "id": 1, "name": "Rand", "content": "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie", "tag": "tag1", "createdAt": "1/27/2019", "imageUrl": "http://dummyimage.com/227x177.png/dddddd/000000" },
        { "id": 2, "name": "Elisa", "content": "eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a", "tag": "asd", "createdAt": "7/31/2019", "imageUrl": "http://dummyimage.com/150x106.bmp/5fa2dd/ffffff" },
        { "id": 3, "name": "Mallory", "content": "orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis", "tag": "tag1", "createdAt": "2/25/2019", "imageUrl": "http://dummyimage.com/158x227.bmp/cc0000/ffffff" },
        { "id": 4, "name": "Drusy", "content": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis", "tag": "Focused", "createdAt": "6/8/2019", "imageUrl": "http://dummyimage.com/173x132.png/cc0000/ffffff" },
        { "id": 5, "name": "Marrilee", "content": "aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu", "tag": "Future-proofed", "createdAt": "8/10/2019", "imageUrl": "http://dummyimage.com/142x116.png/ff4444/ffffff" }];

        var expectedResult = [items[0], items[2]];
        var result = search(items, 1, 2, filterFn, sortFn);
        expect(result).toEqual(expectedResult);
    });

    it('should return correct items for single page', function () {
        var expectedResult = items;
        var result = search(items, 1, 5, filterFn, sortFn);
        expect(result).toEqual(expectedResult);
    });

    it('should return correct items for partially filled page', function () {
        var expectedResult = items.slice(3, 5);
        var result = search(items, 2, 3, filterFn, sortFn);
        expect(result).toEqual(expectedResult);
    });

    it('should return correct items for single item', function () {
        items = [{ "id": 1, "name": "Rand", "content": "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie", "tag": "tag1", "createdAt": "1/27/2019", "imageUrl": "http://dummyimage.com/227x177.png/dddddd/000000" }];
        var expectedResult = [items[0]];
        var result = search(items, 1, 1, filterFn, sortFn);
        expect(result).toEqual(expectedResult);
    });

    it('should return correct items for page size greater than number of items', function () {
        var result = search(items, 1, 1000, filterFn, sortFn);
        expect(result).toEqual(items);
    });

    it('should return empty array for invalid page number', function () {
        var result = search(items, 0, 3, filterFn, sortFn);
        expect(result).toEqual([]);
    });

    it('should return empty array for page number greater than page count', function () {
        var result = search(items, 6, 1, filterFn, sortFn);
        expect(result).toEqual([]);
    });

    it('should return empty array for invalid page size', function () {
        var result = search(items, 1, 0, filterFn, sortFn);
        expect(result).toEqual([]);
    });
});

