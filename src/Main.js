var start;

function main() {

    var $input;
    var first;
    var operation;
    var clearNeeded;

    start = function () {
        $input = $("#input");
        first = 0;
        operation = identity;
        $input.text("");
        clearNeeded = false;
    };

    start();

    $("#ac").on("tap click", start);

    $("#c").on("tap click", function () {
        var withoutLastDigit = $input.text().slice(0, -1);
        $input.text(withoutLastDigit);
    });

    $("#ce").on("tap click", function () {
        $input.text("");
    });

    $("#plus").on("tap click", function () {
        evaluate();
        operation = add;
        first = $input.text();
        clearNeeded = true;
    });

    $("#minus").on("tap click", function () {
        evaluate();
        operation = subtract;
        first = $input.text();
        clearNeeded = true;
    });

    $("#multiply").on("tap click", function () {
        evaluate();
        operation = multiply;
        first = $input.text();
        clearNeeded = true;
    });

    $("#divide").on("tap click", function () {
        evaluate();
        operation = divide;
        first = $input.text();
        clearNeeded = true;
    });

    $("#percent").on("tap click", function () {
        first = $input.text();

        var answer = round(convertToPercent(first));
        $input.text(answer);
    });

    $("#dot").on("tap click", function () {
        $input.text($input.text() + ".");
    });

    function evaluate() {
        var second = $input.text();
        var answer = round(operation(parseFloat(first), parseFloat(second)));
        $input.text(answer);
        operation = identity;
    }

    function round(number) {
        return Number(number.toFixed(8));
    }

    $("#equal").on("tap click", evaluate);

    for (var i = 0; i <= 9; i++) {

        (function (i) {

            $("#" + i).on("tap click", function () {
                if (clearNeeded) {
                    $input.text("");
                    clearNeeded = false;
                }
                $input.text($input.text() + i);
            });

        })(i);

    }
}