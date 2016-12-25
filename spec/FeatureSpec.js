describe("user wants to solve a simple math expression", function () {
    beforeEach(start);

    describe("when entering a single number", function () {
        it("shows that number", function () {
            $("#5").click();
            $("#2").click();

            expect($("#input").text()).toEqual("52");
        });

        it("shows a floating-point number", function () {
            $("#5").click();
            $("#dot").click();
            $("#2").click();

            expect($("#input").text()).toEqual("5.2");
        });

        it("shows a number with all digits", function () {
            $("#1").click();
            $("#2").click();
            $("#3").click();
            $("#4").click();
            $("#5").click();
            $("#6").click();
            $("#7").click();
            $("#8").click();
            $("#9").click();
            $("#0").click();
            $("#1").click();

            expect($("#input").text()).toEqual("12345678901");
        });
    });

    describe("when adding two numbers", function () {
        it("shows the sum of these 2 numbers", function () {
            $("#2").click();
            $("#5").click();

            expect($("#input").text()).toEqual("25");

            $("#plus").click();

            expect($("#input").text()).toEqual("25");

            $("#3").click();
            $("#8").click();

            expect($("#input").text()).toEqual("38");

            $("#equal").click();

            expect($("#input").text()).toEqual("63");
        });

        it("shows the sum of these 2 float numbers", function () {
            $("#1").click();
            $("#dot").click();
            $("#3").click();

            expect($("#input").text()).toEqual("1.3");

            $("#plus").click();
            $("#3").click();
            $("#dot").click();
            $("#5").click();

            expect($("#input").text()).toEqual("3.5");

            $("#equal").click();

            expect($("#input").text()).toEqual("4.8");
        });

    });

    describe("when subtracting two numbers", function () {

        it("shows the difference of these 2 numbers", function () {
            $("#1").click();
            $("#0").click();

            expect($("#input").text()).toEqual("10");

            $("#minus").click();

            expect($("#input").text()).toEqual("10");

            $("#2").click();
            $("#5").click();

            expect($("#input").text()).toEqual("25");

            $("#equal").click();

            expect($("#input").text()).toEqual("-15");
        });

        it("shows the difference of these 2 float numbers", function () {
            $("#1").click();
            $("#dot").click();
            $("#3").click();

            expect($("#input").text()).toEqual("1.3");

            $("#minus").click();
            $("#3").click();
            $("#dot").click();
            $("#5").click();

            expect($("#input").text()).toEqual("3.5");

            $("#equal").click();

            expect($("#input").text()).toEqual("-2.2");
        });
    });

    describe("when multiplying two numbers", function () {
        it("shows the product of these two numbers", function () {
            $("#3").click();
            $("#4").click();

            expect($("#input").text()).toEqual("34");

            $("#multiply").click();

            expect($("#input").text()).toEqual("34");

            $("#1").click();
            $("#0").click();

            $("#equal").click();

            expect($("#input").text()).toEqual("340");

        });

        it("shows the product of these 2 float numbers", function () {
            $("#1").click();
            $("#dot").click();
            $("#3").click();

            expect($("#input").text()).toEqual("1.3");

            $("#multiply").click();
            $("#3").click();
            $("#dot").click();
            $("#5").click();

            expect($("#input").text()).toEqual("3.5");

            $("#equal").click();

            expect($("#input").text()).toEqual("4.55");
        });
    });

    describe("when dividing two numbers", function () {
        it("shows the quotient of these two numbers", function () {
            $("#2").click();
            $("#6").click();

            expect($("#input").text()).toEqual("26");

            $("#divide").click();

            expect($("#input").text()).toEqual("26");

            $("#1").click();
            $("#3").click();

            $("#equal").click();

            expect($("#input").text()).toEqual("2");
        });

        it("shows 0 when the divisor of these two numbers is 0", function () {
            $("#1").click();
            $("#2").click();

            $("#divide").click();
            $("#0").click();

            $("#equal").click();

            expect($("#input").text()).toEqual("0");
        });

        it("shows the quotient of these 2 float numbers", function () {
            $("#1").click();
            $("#dot").click();
            $("#3").click();

            expect($("#input").text()).toEqual("1.3");

            $("#divide").click();
            $("#3").click();
            $("#dot").click();
            $("#5").click();

            expect($("#input").text()).toEqual("3.5");

            $("#equal").click();

            expect($("#input").text()).toEqual("0.37142857");
        });
    });

    describe("when converting a number to percentage", function () {
        it("shows percentage of the number", function () {
            $("#5").click();
            $("#6").click();

            $("#percent").click();

            expect($("#input").text()).toEqual("0.56");
        });

        it("shows percentage of the number", function () {
            $("#5").click();
            $("#dot").click();
            $("#6").click();

            $("#percent").click();

            expect($("#input").text()).toEqual("0.056");
        });

    });

    describe("when deleting one digit", function () {
        it("removes the last digit from input", function () {
            $("#2").click();
            $("#3").click();

            expect($("#input").text()).toEqual("23");

            $("#c").click();

            expect($("#input").text()).toEqual("2");
        });
    });

    describe("when deleting the current number", function () {
        it("removes the current number from input and allows to continue entry", function () {
            $("#4").click();
            $("#5").click();
            $("#6").click();

            expect($("#input").text()).toEqual("456");

            $("#minus").click();
            $("#7").click();
            $("#9").click();

            $("#ce").click();

            expect($("#input").text()).toEqual("");

            $("#5").click();
            $("#5").click();

            $("#equal").click();

            expect($("#input").text()).toEqual("401");
        });
    });

    describe("when resetting the calculator", function () {
        it("starts expression entry from start", function () {
            $("#3").click();
            $("#5").click();

            expect($("#input").text()).toEqual("35");

            $("#plus").click();
            $("#2").click();
            $("#4").click();

            $("#ac").click();

            expect($("#input").text()).toEqual("");

            $("#8").click();
            $("#4").click();

            $("#equal").click();

            expect($("#input").text()).toEqual("84");
        });
    });

    describe("when using equals without operation", function () {
        it("shows the current number", function () {
            $("#1").click();
            $("#7").click();

            $("#equal").click();

            expect($("#input").text()).toEqual("17");
        });
    });

    describe("when entering complex expression", function () {
        it("shows the correct result of complex expression", function () {
            $("#2").click();
            $("#plus").click();
            $("#3").click();
            $("#multiply").click();
            $("#4").click();
            $("#plus").click();
            $("#1").click();
            $("#minus").click();
            $("#6").click();
            $("#divide").click();
            $("#3").click();

            $("#equal").click();

            expect($("#input").text()).toEqual("5");
        });
    });
});