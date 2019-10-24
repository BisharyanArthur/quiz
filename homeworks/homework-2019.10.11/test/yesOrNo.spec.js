describe("yesOrNo", function () {
    it("should be Yes for true", function () {
        expect(yesOrNo(true)).toBe("Yes");
    });

    it("should be No for false", function () {
        expect(yesOrNo(false)).toBe("No");
    });

    it("should be null for incorrect data", function () {
        expect(yesOrNo(1)).toBeNull();
    });

    it("should be null for incorrect data", function () {
        expect(yesOrNo("yes")).toBeNull();
    });

    it("should be null for incorrect data", function () {
        expect(yesOrNo(undefined)).toBeNull();
    });
});