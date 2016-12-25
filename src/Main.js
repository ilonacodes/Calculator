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

    $("#ac").on("click", start);

    $("#c").on("click", function () {
        var withoutLastDigit = $input.text().slice(0, -1);
        $input.text(withoutLastDigit);
    });

    $("#ce").on("click", function () {
        $input.text("");
    });

    $("#plus").on("click", function () {
        evaluate();
        operation = add;
        first = $input.text();
        clearNeeded = true;
    });

    $("#minus").on("click", function () {
        evaluate();
        operation = subtract;
        first = $input.text();
        clearNeeded = true;
    });

    $("#multiply").on("click", function () {
        evaluate();
        operation = multiply;
        first = $input.text();
        clearNeeded = true;
    });

    $("#divide").on("click", function () {
        evaluate();
        operation = divide;
        first = $input.text();
        clearNeeded = true;
    });

    $("#percent").on("click", function () {
        first = $input.text();

        var answer = round(convertToPercent(first));
        $input.text(answer);
    });

    $("#dot").on("click", function () {
        $input.text($input.text() + ".");
    });

    function evaluate() {
        var second = $input.text();
        var answer = round(operation(parseFloat(first), parseFloat(second)));
        $input.text(answer);
    }

    function round(number) {
        return Number(number.toFixed(8));
    }

    $("#equal").on("click", evaluate);

    for (var i = 0; i <= 9; i++) {

        (function (i) {

            $("#" + i).on("click", function () {
                if (clearNeeded) {
                    $input.text("");
                    clearNeeded = false;
                }
                $input.text($input.text() + i);
            });

        })(i);

    }
}