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

    function onTap(el, fn) {
        el.on("touchstart click", function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.handled === true) return;
            event.handled = true;
            fn();
        });
    }

    onTap($("#ac"), start);

    onTap($("#c"), function () {
        var withoutLastDigit = $input.text().slice(0, -1);
        $input.text(withoutLastDigit);
    });

    onTap($("#ce"), function () {
        $input.text("");
    });

    onTap($("#plus"), function () {
        evaluate();
        operation = add;
        first = $input.text();
        clearNeeded = true;
    });

    onTap($("#minus"), function () {
        evaluate();
        operation = subtract;
        first = $input.text();
        clearNeeded = true;
    });

    onTap($("#multiply"), function () {
        evaluate();
        operation = multiply;
        first = $input.text();
        clearNeeded = true;
    });

    onTap($("#divide"), function () {
        evaluate();
        operation = divide;
        first = $input.text();
        clearNeeded = true;
    });

    onTap($("#percent"), function () {
        first = $input.text();

        var answer = round(convertToPercent(first));
        $input.text(answer);
    });

    onTap($("#dot"), function () {
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

    onTap($("#equal"), evaluate);

    for (var i = 0; i <= 9; i++) {

        (function (i) {

            onTap($("#" + i), function () {
                if (clearNeeded) {
                    $input.text("");
                    clearNeeded = false;
                }
                $input.text($input.text() + i);
            });

        })(i);

    }
}