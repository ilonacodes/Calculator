describe("Calculator", function () {
   it("adds two numbers", function () {
      expect(add(1, 2)).toEqual(3);
   });

    it("subtracts two numbers", function () {
       expect(subtract(6, 2)).toEqual(4);
       expect(subtract(-9, -1)).toEqual(-8);
    });

    it("multiplies two numbers", function () {
       expect(multiply(3, 3)).toEqual(9);
    });

    it("divides two numbers", function () {
       expect(divide(10, 2)).toEqual(5);
    });

    it("returns 0 when dividing by 0", function () {
       expect(divide(10, 0)).toEqual(0);
    });

    it("converts number to percentage", function () {
       expect(convertToPercent(45)).toEqual(0.45);
    });
});