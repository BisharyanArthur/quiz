describe("counter", function () {
    it("should return correct count", function () {
        expect(counter(0)).toBe(String(0));
    });

    it("should return correct count", function () {
        expect(counter(5)).toBe(String(5));
    });

    it("should return correct count", function () {
        expect(counter(9)).toBe(String(9));
    });

    it("should return null", function () {
        expect(counter(-1)).toBeNull();
    });
});