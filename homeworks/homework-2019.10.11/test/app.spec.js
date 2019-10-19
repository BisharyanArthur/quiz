describe("App", function () {
    describe("yesOrNo", function () {
        it("should return yes", function () {
            expect(yesOrNo(true)).toBe("Yes");
        });

        it("should return no", function () {
            expect(yesOrNo(false)).toBe("No");
        });

        it("should return null", function () {
            expect(yesOrNo(1)).toBeNull();
        });

        it("should return null", function () {
            expect(yesOrNo("yes")).toBeNull();
        });
    });

    describe("counter", function () {
        it("should return correct count", function () {
            for (var i = 1; i <= 9; i++) {
                expect(counter(i)).toBe(String(i));
            }
        });

        it("should return null", function () {
            expect(counter(0)).toBeNull();
        });

        it("should return null", function () {
            expect(counter(-1)).toBeNull();
        });
    });

    describe("calculateAge", function () {
        it("should return correct age", function() {
            var date = new Date("10/19/2018");
            expect(calculateAge(date)).toBe(1);
        });

        it("should return correct age", function() {
            var date = new Date("04/29/1998");
            expect(calculateAge(date)).toBe(21);
        });

        it("should return correct age", function() {
            var date = new Date("01/01/1970");
            expect(calculateAge(date)).toBe(49);
        });

        it("should return null", function() {
            var date = new Date("21/19/2018");
            expect(calculateAge(date)).toBeNull();
        });

        it("should return null", function() {
            var date = new Date("02/14/2045");
            expect(calculateAge(date)).toBeNull();
        });
    });

    describe("getRandomItem", function () {
        it("should return element from list", function () {
            var list = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
            for (var i = 0; i < 100; i++) {
                expect(list).toContain(getRandomItem(list));
            }
        });

        it("should return null", function () {
            expect(getRandomItem(1)).toBeNull();
        });

        it("should return null", function () {
            expect(getRandomItem([])).toBeNull();
        });
    });
});
