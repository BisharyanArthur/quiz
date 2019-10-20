describe("App", function () {
    // тогда уж будь добр каждый describe сделать отдельным файлов, а в index.html подключать 4 файла
    describe("yesOrNo", function () {
        // название тестов так себе
        // should be Yes for true
        // should be null for incorrect data,
        // когда тест падает он точно должен сказать почему, а не просто error: yesOrNo -> should return null
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

        it("should be null for incorrect data", function () {
            expect(yesOrNo(undefined)).toBeNull();
        });
    });

    describe("counter", function () {
        // ужасно, никаких циклов в тестах, проверь руками 1, 5, 9, 10, null и т.д.
        it("should return correct count", function () {
            for (var i = 1; i <= 9; i++) {
                expect(counter(i)).toBe(String(i));
            }
        });

        // мой косяк скорее, всё же 0 логичнее
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

        // should be null for date in the future
        it("should return null", function() {
            var date = new Date("02/14/2045");
            expect(calculateAge(date)).toBeNull();
        });

        it("should be 28 for 12.12.1990", function() {
            var date = new Date("12.12.1990");
            expect(calculateAge(date)).toBe(28);
        });
    });

    describe("getRandomItem", function () {
        it("should return element from list", function () {
            var list = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
            // без циклов, задай [1,2,3] и что result >= 1 && result <=3, изи
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
