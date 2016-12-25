var calculatorHtml = "";
var $body = $("body");
var syncLoad = $body.hasClass("js-sync-load");

$.ajax({
    url: "src/calculator.html",
    async: !syncLoad,
    success: function (html) {
        calculatorHtml = html;
        $body.prepend(calculatorHtml);
        main();
    }
});

