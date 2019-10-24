describe("getRandomItem", function () {
    it("should be element from list", function () {
        var list = [1, 2, 3];
        var item = getRandomItem(list);
        expect(1 <= item && item <= 3).toBeTruthy();
    });

    it("should be null for incorrect data", function () {
        expect(getRandomItem(1)).toBeNull();
    });

    it("should be null for empty array", function () {
        expect(getRandomItem([])).toBeNull();
    });
});

