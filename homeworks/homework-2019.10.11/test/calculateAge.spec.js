describe("calculateAge", function () {
    it("should return correct age", function () {
        var date = new Date("10/19/2018");
        expect(calculateAge(date)).toBe(1);
    });

    it("should return correct age", function () {
        var date = new Date("04/29/1998");
        expect(calculateAge(date)).toBe(21);
    });

    it("should return correct age", function () {
        var date = new Date("01/01/1970");
        expect(calculateAge(date)).toBe(49);
    });

    it("should return null", function () {
        var date = new Date("21/19/2018");
        expect(calculateAge(date)).toBeNull();
    });

    it("should be null for date in the future", function () {
        var date = new Date("02/14/2045");
        expect(calculateAge(date)).toBeNull();
    });

    it("should calculate correct age", function () {
        var date = new Date("12.12.1990");
        expect(calculateAge(date)).toBe(28);
    });
});