function touch(element) {
    element.trigger($.Event("touchstart", {}));
}

describe("user wants to solve a simple math expression", function () {
    beforeEach(start);

    describe("when entering a single number", function () {
        it("shows that number", function () {
            touch($("#5"));
            touch($("#2"));

            expect($("#input").text()).toEqual("52");
        });

        it("shows that number when clicks are used", function () {
            $("#5").click();
            $("#2").click();

            expect($("#input").text()).toEqual("52");
        });

        it("shows a floating-point number", function () {
            touch($("#5"));
            touch($("#dot"));
            touch($("#2"));

            expect($("#input").text()).toEqual("5.2");
        });

        it("shows a number with all digits", function () {
            touch($("#1"));
            touch($("#2"));
            touch($("#3"));
            touch($("#4"));
            touch($("#5"));
            touch($("#6"));
            touch($("#7"));
            touch($("#8"));
            touch($("#9"));
            touch($("#0"));
            touch($("#1"));

            expect($("#input").text()).toEqual("12345678901");
        });
    });

    describe("when adding two numbers", function () {
        it("shows the sum of these 2 numbers", function () {
            touch($("#2"));
            touch($("#5"));

            expect($("#input").text()).toEqual("25");

            touch($("#plus"));

            expect($("#input").text()).toEqual("25");

            touch($("#3"));
            touch($("#8"));

            expect($("#input").text()).toEqual("38");

            touch($("#equal"));

            expect($("#input").text()).toEqual("63");
        });

        it("shows the sum of these 2 float numbers", function () {
            touch($("#1"));
            touch($("#dot"));
            touch($("#3"));

            expect($("#input").text()).toEqual("1.3");

            touch($("#plus"));
            touch($("#3"));
            touch($("#dot"));
            touch($("#5"));

            expect($("#input").text()).toEqual("3.5");

            touch($("#equal"));

            expect($("#input").text()).toEqual("4.8");
        });

    });

    describe("when subtracting two numbers", function () {

        it("shows the difference of these 2 numbers", function () {
            touch($("#1"));
            touch($("#0"));

            expect($("#input").text()).toEqual("10");

            touch($("#minus"));

            expect($("#input").text()).toEqual("10");

            touch($("#2"));
            touch($("#5"));

            expect($("#input").text()).toEqual("25");

            touch($("#equal"));

            expect($("#input").text()).toEqual("-15");
        });

        it("shows the difference of these 2 float numbers", function () {
            touch($("#1"));
            touch($("#dot"));
            touch($("#3"));

            expect($("#input").text()).toEqual("1.3");

            touch($("#minus"));
            touch($("#3"));
            touch($("#dot"));
            touch($("#5"));

            expect($("#input").text()).toEqual("3.5");

            touch($("#equal"));

            expect($("#input").text()).toEqual("-2.2");
        });
    });

    describe("when multiplying two numbers", function () {
        it("shows the product of these two numbers", function () {
            touch($("#3"));
            touch($("#4"));

            expect($("#input").text()).toEqual("34");

            touch($("#multiply"));

            expect($("#input").text()).toEqual("34");

            touch($("#1"));
            touch($("#0"));

            touch($("#equal"));

            expect($("#input").text()).toEqual("340");

        });

        it("shows the product of these 2 float numbers", function () {
            touch($("#1"));
            touch($("#dot"));
            touch($("#3"));

            expect($("#input").text()).toEqual("1.3");

            touch($("#multiply"));
            touch($("#3"));
            touch($("#dot"));
            touch($("#5"));

            expect($("#input").text()).toEqual("3.5");

            touch($("#equal"));

            expect($("#input").text()).toEqual("4.55");
        });
    });

    describe("when dividing two numbers", function () {
        it("shows the quotient of these two numbers", function () {
            touch($("#2"));
            touch($("#6"));

            expect($("#input").text()).toEqual("26");

            touch($("#divide"));

            expect($("#input").text()).toEqual("26");

            touch($("#1"));
            touch($("#3"));

            touch($("#equal"));

            expect($("#input").text()).toEqual("2");
        });

        it("shows 0 when the divisor of these two numbers is 0", function () {
            touch($("#1"));
            touch($("#2"));

            touch($("#divide"));
            touch($("#0"));

            touch($("#equal"));

            expect($("#input").text()).toEqual("0");
        });

        it("shows the quotient of these 2 float numbers", function () {
            touch($("#1"));
            touch($("#dot"));
            touch($("#3"));

            expect($("#input").text()).toEqual("1.3");

            touch($("#divide"));
            touch($("#3"));
            touch($("#dot"));
            touch($("#5"));

            expect($("#input").text()).toEqual("3.5");

            touch($("#equal"));

            expect($("#input").text()).toEqual("0.37142857");
        });
    });

    describe("when converting a number to percentage", function () {
        it("shows percentage of the number", function () {
            touch($("#5"));
            touch($("#6"));

            touch($("#percent"));

            expect($("#input").text()).toEqual("0.56");
        });

        it("shows percentage of the number", function () {
            touch($("#5"));
            touch($("#dot"));
            touch($("#6"));

            touch($("#percent"));

            expect($("#input").text()).toEqual("0.056");
        });

    });

    describe("when deleting one digit", function () {
        it("removes the last digit from input", function () {
            touch($("#2"));
            touch($("#3"));

            expect($("#input").text()).toEqual("23");

            touch($("#c"));

            expect($("#input").text()).toEqual("2");
        });
    });

    describe("when deleting the current number", function () {
        it("removes the current number from input and allows to continue entry", function () {
            touch($("#4"));
            touch($("#5"));
            touch($("#6"));

            expect($("#input").text()).toEqual("456");

            touch($("#minus"));
            touch($("#7"));
            touch($("#9"));

            touch($("#ce"));

            expect($("#input").text()).toEqual("");

            touch($("#5"));
            touch($("#5"));

            touch($("#equal"));

            expect($("#input").text()).toEqual("401");
        });
    });

    describe("when resetting the calculator", function () {
        it("starts expression entry from start", function () {
            touch($("#3"));
            touch($("#5"));

            expect($("#input").text()).toEqual("35");

            touch($("#plus"));
            touch($("#2"));
            touch($("#4"));

            touch($("#ac"));

            expect($("#input").text()).toEqual("");

            touch($("#8"));
            touch($("#4"));

            touch($("#equal"));

            expect($("#input").text()).toEqual("84");
        });
    });

    describe("when using equals without operation", function () {
        it("shows the current number", function () {
            touch($("#1"));
            touch($("#7"));

            touch($("#equal"));

            expect($("#input").text()).toEqual("17");
        });
    });

    describe("when entering complex expression", function () {
        it("shows the correct result of complex expression", function () {
            touch($("#2"));
            touch($("#plus"));
            touch($("#3"));
            touch($("#multiply"));
            touch($("#4"));
            touch($("#plus"));
            touch($("#1"));
            touch($("#minus"));
            touch($("#6"));
            touch($("#divide"));
            touch($("#3"));

            touch($("#equal"));

            expect($("#input").text()).toEqual("5");
        });

        it("handles operation after equals well", function () {
            touch($("#2"));
            touch($("#equal"));
            touch($("#plus"));
            touch($("#3"));
            touch($("#equal"));
            touch($("#multiply"));
            touch($("#4"));
            touch($("#equal"));
            touch($("#plus"));
            touch($("#1"));
            touch($("#equal"));
            touch($("#minus"));
            touch($("#6"));
            touch($("#equal"));
            touch($("#divide"));
            touch($("#3"));

            touch($("#equal"));

            expect($("#input").text()).toEqual("5");
        });
    });
});